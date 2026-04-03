import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, ComponentRef, ElementRef, EventEmitter, forwardRef, Inject, Input, OnChanges, OnInit, Optional, Output, Self, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { DynamicDataSource } from 'src/app/menu-tree/dynamic-tree-datasource';
import { ChecklistSelectionService } from 'src/app/shared/tree/tree-selection/checklist-selection.service';
import { DynamicDatabase, getLevel, isExpandable, hasChild } from 'src/app/shared/tree/tree-selection/dynamic-tree-database';
import { TREE_SERVICE, TreeDataSource, TreeService } from '../../shared/dynamic-data-source';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'spr-input-select-tree',
  templateUrl: './input-select-tree.component.html',
  styleUrls: ['./input-select-tree.component.css'],
  // 关键：在这里配置宿主元素的类绑定
  host: {
    // 强制将自定义组件视为表单控件，这样 Angular 会自动添加 ng-invalid/ng-touched 等类
    'class': 'mat-mdc-form-field mat-mdc-text-field--filled',

    // 动态绑定 is-invalid 类，以便我们可以在 CSS 中使用标准的 :host(.ng-invalid)
    '[class.is-invalid]': 'ngControl?.invalid && (ngControl?.touched || ngControl?.dirty)',

    // 或者直接使用官方的 ng-invalid 宿主绑定
    '[class.ng-invalid]': 'ngControl?.invalid && (ngControl?.touched || ngControl?.dirty)'
  },
  providers: [
    {
      // 注册为 ControlValueAccessor
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => InputSelectTreeComponent),
      multi: true
    }
  ]
})
export class InputSelectTreeComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() initSelected: any[] = [];
  @Input() multiple: boolean = false

  static nextId = 0;

  // 标识符
  controlType = 'article-catalog-select';

  // 用于通知 MatFormField 控件状态已改变 (RxJS Subject)
  stateChanges = new Subject<void>();

  // 用于辅助实现唯一 ID
  id = `article-catalog-select-${InputSelectTreeComponent.nextId++}`;

  // 是否禁用，通过 setDisabledState 方法设置
  disabled = false;

  // MatFormFieldControl 要求的值属性
  @Input()
  get value(): string | string[] | null {
    // 关键修改：根据 multiple 属性返回单值或数组
    if (this.multiple) {
      // 多选：返回 ID 数组
      return this.selectedIds;
    } else {
      // 单选：返回第一个 ID (字符串) 或 null
      return this.selectedIds.length > 0 ? this.selectedIds[0] : null;
    }
  }

  set value(input: string | string[] | null) {
    let newValue: string[] = [];

    if (this.multiple) {
      // 多选模式：期望输入是数组
      newValue = Array.isArray(input) ? input : [];
    } else {
      // 单选模式：期望输入是单个值
      if (typeof input === 'string' && input) {
        newValue = [input];
      } else {
        newValue = [];
      }
    }

    this.selectedIds = newValue;
    this.syncSelectionModel();
    this.stateChanges.next();
  }

  // 是否必填，通过 NgControl 自动获取
  get required(): boolean {
    return this.ngControl?.control?.validator ? true : false;
  }

  // 控件是否为空 (用于浮动标签)
  get empty(): boolean {
    return !this.value || this.value.length === 0;
  }

  // 标签是否应该浮动
  get shouldLabelFloat(): boolean {
    return !this.empty || this.focused;
  }

  // 验证状态
  get errorState(): boolean {
    return !!(this.ngControl?.invalid && this.ngControl?.touched);
  }

  // 内部焦点状态
  focused = false;

  // 实现 ControlValueAccessor 中的 setDisabledState
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  // 当用户点击组件时触发焦点
  onContainerClick(event: MouseEvent): void {
    if (!this.focused) {
      this.openDlg(); // 或打开对话框
    }
  }

  openDlg() {
    this.dialog.open(TreeSelectDialogComponent, { width: '750px', data: { multiple: this.multiple, treeService: this.treeService } }).afterClosed().subscribe(res => {
      this.checklistSelection.select(...res || [])
      // 关键：值已改变，更新组件的内部值并通知外部表单模型
      const newSelectedIds = this.checklistSelection.selected.map(n => n.id);
      this.selectedIds = newSelectedIds;

      // 通知 ngModel/FormControl 值已改变
      this.onChange(this.multiple? this.selectedIds: this.selectedIds[0]);

      // 触发触摸状态（可选，但对于验证很有用）
      this.onTouched();
    });
  }

  selectedCatalogs: any[] = []

  // 存储从 ngModel/formControlName 接收的已选中 ID 数组
  private selectedIds: string[] = [];
  // 核心：用于跟踪选中的节点
  checklistSelection = new SelectionModel<any>(false /* multiple */);

  onToggle(node: any) {
    this.checklistSelection.toggle(node);

    // 获取新的选中 ID 数组
    const newSelectedIds = this.checklistSelection.selected.map(n => n.id);

    // 更新组件内部的 selectedIds
    this.selectedIds = newSelectedIds;

    let outputValue: string | string[] | null;

    if (this.multiple) {
      // 多选：输出数组
      outputValue = newSelectedIds;
    } else {
      // 单选：输出单个字符串 ID 或 null
      outputValue = newSelectedIds.length > 0 ? newSelectedIds[0] : null;
    }

    // 关键：通知 ngModel/FormControl 值已改变
    this.onChange(outputValue);

    // 触发触摸状态
    this.onTouched();
  }


  treeControl!: FlatTreeControl<any>;
  dataSource!: TreeDataSource;
  database!: DynamicDatabase
  constructor(
    // 关键：注入 NgControl，用于访问表单状态和验证器
    // @Self() 确保我们只获取与此组件直接关联的 NgControl
    // @Optional() 使组件在非表单环境下也能工作
    @Optional() @Self() public ngControl: NgControl,
    // public database: DynamicDatabase,
    private http: HttpClient,
    @Inject(TREE_SERVICE) private treeService: TreeService,
    private dialog: MatDialog,
  ) {
    if (this.ngControl) {
      // 告诉 NgControl 自己就是 ControlValueAccessor
      this.ngControl.valueAccessor = this;
    }
    // 关键修复：确保 SelectionModel 在构造函数中使用 Input() 的值进行初始化
    // 注意：在构造函数中，Input() 属性（如 this.multiple）尚未初始化，
    // 因此更好的做法是使用一个硬编码的 SelectionModel，并在 ngOnChanges
    // 或 ngAfterViewInit 中处理多选状态。
    // 然而，因为您已经在 constructor 中使用了 this.multiple，
    // Angular 会使用绑定前的值，如果父组件没有明确绑定，它将是 false。


  }
  ngOnChanges(changes: SimpleChanges): void {

    this.checklistSelection.select(...this.initSelected)
  }

  // 接收外部传入的标签名
  @Input() label: string = '自定义输入';

  // 组件的内部值
  // value: any = '';

  // ControlValueAccessor 接口需要实现的三个方法和两个内部变量

  // 1. 值改变时，将值传递给 Angular Forms 的回调函数
  onChange = (value: any) => { };

  // 2. 触摸状态改变时，通知 Angular Forms 的回调函数
  onTouched = () => { };


  /**
   * 写入组件的值（当外部通过 ngModel 或 FormControl.setValue() 改变值时调用）
   * @param value - 外部传入的新值
   */
  writeValue(value: any): void {
    let normalizedValue: string[] = [];

    if (this.multiple) {
      // 多选：期望数组
      if (value && Array.isArray(value)) {
        normalizedValue = value;
      }
    } else {
      // 单选：期望字符串
      if (typeof value === 'string' && value) {
        normalizedValue = [value];
      }
    }

    this.selectedIds = normalizedValue;
    // 重新同步 SelectionModel
    this.syncSelectionModel();
  }

  /**
   * 注册当值发生变化时的回调函数（用于通知 Angular Forms 值已改变）
   * @param fn - Angular Forms 提供的回调函数
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * 注册当控件被触摸（失焦）时的回调函数
   * @param fn - Angular Forms 提供的回调函数
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * 禁用/启用控件
   * @param isDisabled - 是否禁用
   */
  // setDisabledState?(isDisabled: boolean): void {
  //   // 如果需要，可以在这里处理组件的禁用状态（例如改变样式或禁用内部 <input>）
  //   // console.log('Disabled state changed:', isDisabled);
  // }

  // 内部输入框的输入事件处理
  onInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    // 关键：值改变时，通过注册的 onChange 函数通知外部表单模型
    this.onChange(newValue);
  }

  // 内部输入框的失焦事件处理
  onBlur(): void {
    // 关键：失焦时，通过注册的 onTouched 函数通知外部表单模型（标记为 touched）
    this.onTouched();
  }

  /**
   * 实现 MatFormField 内部所需的方法。
   * 它用于将 MatFormField 的提示/错误消息的 ID 传递给控件的内部元素
   * 以实现无障碍访问 (ARIA)。
   */
  setDescribedByIds(ids: string[]): void {
    // 您不需要在这里做任何事情，除非您希望将这些 ID 绑定到内部元素上。
    // 仅定义它即可满足 MatFormField 的调用需求。
  }

  ngOnInit(): void {
    // 考虑到 Input 注入时序，通常不在 constructor 中使用 Input 属性，
    // 但基于您现有代码结构，我们信任您已处理好时序或使用了一个临时的 SelectionModel
    this.checklistSelection = new SelectionModel<any>(this.multiple);

    this.treeControl = new FlatTreeControl<any>(
      getLevel,
      isExpandable
    );

    this.dataSource = new TreeDataSource(this.treeControl, this.treeService);
    this.treeService.initialData().subscribe((res: any) => {
      this.dataSource.data = res.content
    })

    this.dataSource.data = [];
    // 初始化时同步 SelectionModel
    this.syncSelectionModel();
  }

  hasChild = hasChild


  /**
   * 将外部传入的 selectedIds 同步到内部的 checklistSelection 模型。
   */
  private syncSelectionModel(): void {
    this.checklistSelection.clear();
    const flatNodes = this.treeControl?.dataNodes;

    // 遍历所有扁平节点，如果ID在 selectedIds 数组中，则选中
    flatNodes?.forEach(node => {
      if (this.selectedIds.includes(node.id)) {
        this.checklistSelection.select(node);
      }
    });
  }
}
