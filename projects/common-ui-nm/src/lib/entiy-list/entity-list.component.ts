import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { PageEvent, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DialogService } from "../dialog/dialog.service";
import { SelectionModel } from "@angular/cdk/collections";
export interface ViewConfig {
  name: string,
  field: string,
  id: any,
  link: string,
  type?: 'date' | 'number' | 'string',
  sort?: boolean,
  filter?: boolean,
}

@Component({
  selector: 'spr-entity-list',
  styles: [`
    th{
  background-color: var(--mat-sidenav-content-background-color) !important;
}
.table-container{
  width: 100%;
  height: calc(100vh - 200px)

}
    `],
  template: `
    <!-- <div class="s-row">
  <button mat-flat-button (click)="new()" color="primary">添加用户</button>
</div> -->

<section class="table-container">
  <table mat-table [dataSource]="dataSource">

    <ng-container matColumnDef="select">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;">
        <mat-checkbox (change)="$event ? toggleAllRows() : null"
                  [checked]="selection.hasValue() && isAllSelected()"
                  [indeterminate]="selection.hasValue() && !isAllSelected()">
    </mat-checkbox>
    </th>
      <td mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
                  (change)="$event ? selection.toggle(row) : null"
                  [checked]="selection.isSelected(row)">
    </mat-checkbox>
    </td>
    </ng-container>

    <ng-container matColumnDef="#">
      <th mat-header-cell *matHeaderCellDef style="width: 30px;"> # </th>
      <td mat-cell *matCellDef="let i=index"> {{(pageable?.pageIndex! * pageable?.pageSize!)+ i + 1}} </td>
    </ng-container>

    <ng-container [matColumnDef]="item.field" *ngFor="let item of columns">
      <th mat-header-cell *matHeaderCellDef> {{item.name}} </th>
      <td mat-cell *matCellDef="let element">
        <span *ngIf="item.link" [routerLink]="[item.link]" [queryParams]="{id: element[item.id]}" routerLinkActive="router-link-active" >{{element|jsonPath: item.field}}</span>
        <span *ngIf="!item.link">{{element|jsonPath: item.field}}</span>
    </td>
    </ng-container>


    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef style="width: 60px;">  </th>
      <td mat-cell *matCellDef="let element">
        <div class="s-row">
          <button mat-button color="accent" (click)="delete(element)">删除</button>
        </div>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</section>


<mat-paginator [length]="total" [pageSize]="pageable?.pageSize" [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page"
  (page)="onPageChange($event)">
</mat-paginator>

  `,
})
export class EntityListComponent implements OnInit, OnChanges {

  @Input() entityList: any[] = []
  @Input() total: number = 0
  @Input() viewConfig?: ViewConfig[]

  @Output() onPage: EventEmitter<PageEvent> = new EventEmitter()
  @Output() onDelete: EventEmitter<any[]> = new EventEmitter()

  pageable?: PageEvent
  columns: any;
  displayedColumns: any;

  selection: any;
  delete(element: any) {
    console.log(element)
    this.dialog.confirm('确认删除吗？').subscribe(result => {
      if (result) {
        this.onDelete.next([element]);
      }
    })

  }

  onPageChange($event: PageEvent) {
    if (this.dataSource) {
      this.dataSource.data = []
    }

    this.pageable = $event
    this.onPage.next($event)
  }

  dataSource: any;
  new() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private dialog: DialogService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    const list: any[] = changes['entityList'].currentValue

    if (list && list.length > 0) {
      this.dataSource = new MatTableDataSource(list)
      if (this.viewConfig) {
        this.columns = this.viewConfig
      } else {
        this.columns = Object.keys(list[0]).map(m => { return { name: m, field: m } })
      }

      this.displayedColumns = ['select', '#'].concat((this.viewConfig || []).map(m => m.field)).concat(['action'])
    }


  }

  ngOnInit(): void {
    const initialSelection: any[] | undefined = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
    this.onPageChange({ pageIndex: 0, pageSize: 10, length: 0 })
  }




  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
}
