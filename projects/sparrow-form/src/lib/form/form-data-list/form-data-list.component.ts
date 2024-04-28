import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { FormService } from "@sparrowmini/form-api";

@Component({
  selector: "lib-form-data-list",
  templateUrl: "./form-data-list.component.html",
  styleUrls: ["./form-data-list.component.css"],
})
export class FormDataListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };
  formId?: string;

  displayedColumns = ["seq", "name", "code", "actions"];

  constructor(private formService: FormService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    // this.formService
    //   .allFormDatas(this.pageable.page, this.pageable.size)
    //   .subscribe((res:any) => {
    //     this.dataSource = new MatTableDataSource<any>(res.content);
    //   });
    this.route.queryParams.subscribe((params:any)=>{
      if(params.formId){
        this.formId = params.formId
      }
      this.onPage(this.pageable)
    })
  }

  onPage(e: PageEvent){
    this.pageable.pageIndex = e.pageIndex
    this.pageable.pageSize = e.pageSize
    if(this.formId){
      this.formService.formDatas(this.formId,this.pageable.pageIndex,this.pageable.pageSize).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.content);
        this.pageable.length = res.totalElements!
      })
    }else{
      this.formService.allFormDatas(this.pageable.pageIndex,this.pageable.pageSize).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.content);
        this.pageable.length = res.totalElements!
      })
    }

  }
}
