import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DynamicFlatNode, TREE_SERVICE, TreeDataSource, TreeService } from './dynamic-data-source';
import { ChecklistSelectionService } from '../checklist-selection.service';

/***
 * 可以进行排序的树，整体管理
 */

@Component({
  selector: 'spr-sortable-tree',
  templateUrl: './sortable-tree.component.html',
  styleUrls: ['./sortable-tree.component.css']
})
export class SortableTreeComponent implements OnChanges, OnInit {
  onNodeClick_(node: any) {
    this.selectedNode = node;
    this.onNodeClick.next(node)
  }
  @Input() multiple: boolean = false
  @Input() clickable: boolean = false
  @Input() sortable: boolean = false
  @Input() initSelected: any[] = []
  @Output() onTreeSelect: EventEmitter<any[]> = new EventEmitter<any[]>()
  @Output() onNodeClick: EventEmitter<any> = new EventEmitter<any>()

  public checklistSelectionService!: ChecklistSelectionService
  onToggle(node: any) {
    this.checklistSelectionService.toggleSelection(node, this.dataSource.nodeCache)
    this.onTreeSelect?.emit(this.checklistSelectionService.selected.selected.map(m => m.id))
  }

  dataSource!: TreeDataSource;
  selectedNode: any;

  constructor(
    @Inject(TREE_SERVICE) public treeService: TreeService
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.checklistSelectionService && this.multiple !== undefined) {
      this.checklistSelectionService = new ChecklistSelectionService(this.multiple);
    }

    if (this.checklistSelectionService && this.initSelected?.length) {
      this.initSelected.forEach(f => this.checklistSelectionService.selected.select({ id: f }));
    }

  }
  ngOnInit(): void {
    this.dataSource = new TreeDataSource(this.treeControl, this.treeService);
    this.treeService.initialData().subscribe(res => {
      this.dataSource.data = res

    })
  }

  hasChild = (_: number, node: DynamicFlatNode) => node.childCount > 0;


  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.childCount > 0
  );



  dragging = false;
  expandTimeout: any;
  expandDelay = 1000;
  validateDrop = false;
  expansionModel = new SelectionModel<string>(true);
  drop(event: any) {
    console.log('origin/destination', event.previousIndex, event.currentIndex, event);

    // ignore drops outside of the tree
    if (!event.isPointerOverContainer) return;

    // deep clone the data source so we can mutate it
    const changedData = JSON.parse(JSON.stringify(this.dataSource.data));
    const node_ = changedData[event.previousIndex]
    const nodeAtDest: any = this.dataSource.data[event.currentIndex];
    if (node_.parentId !== nodeAtDest.parentId) {
      alert('仅允许同一层级排序');
      return;
    }
    // recursive find function to find siblings of node
    function findNodeSiblings(
      arr: Array<any>,
      id: string
    ): Array<any> | undefined {
      let result, subResult;
      arr.forEach((item, i) => {
        if (item.id === id) {
          result = arr;
        } else if (item.children) {
          subResult = findNodeSiblings(item.children, id);
          if (subResult) result = subResult;
        }
      });
      return result;
    }

    // determine where to insert the node

    const newSiblings = findNodeSiblings(changedData, nodeAtDest?.id);
    if (!newSiblings) return;
    const insertIndex = newSiblings.findIndex((s) => s.id === nodeAtDest?.id);

    // remove the node from its old place
    const node = event.item.data;
    const siblings = findNodeSiblings(changedData, node.id);
    const siblingIndex = siblings?.findIndex((n) => n.id === node.id);
    const nodeToInsert: any = siblings?.splice(siblingIndex!, 1)[0];
    if (nodeAtDest.id === nodeToInsert.id) return;

    // insert node
    newSiblings.splice(insertIndex, 0, nodeToInsert);

    this.treeService.move(node_.id, nodeAtDest?.id).subscribe(() => {
      this.rebuildTreeForData(changedData);
    })

  }

  rebuildTreeForData(data: any) {
    this.dataSource.data = data;
    this.expansionModel.selected.forEach((id) => {
      const node = this.treeControl.dataNodes.find((n) => n.id === id);
      node.sorting = true
      this.treeControl.expand(node);
    });

  }

}
