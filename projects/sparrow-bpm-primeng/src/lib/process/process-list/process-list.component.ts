import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  KIEServerAndKIEContainersService,
  ProcessAndTaskDefinitionsService,
  ProcessQueriesService
} from "@sparrowmini/jbpm-api";
import {Table} from "primeng/table";

@Component({
  selector: 'lib-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {
  customers1: any[] = [];

  statuses: any[] = [];

  isExpanded: boolean = false;

  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private kIEServerAndKIEContainersService: KIEServerAndKIEContainersService,
    private processQueriesService: ProcessQueriesService,
    private processAndTaskDefinitionsService: ProcessAndTaskDefinitionsService
  ) {}

  ngOnInit(): void {
    this.kIEServerAndKIEContainersService
      .listContainers()
      .subscribe((res: any) => {


        let containers: any[] = res.result['kie-containers']['kie-container'];
        containers.forEach((f) => {
          this.processQueriesService
            .getProcessesByDeploymentId1(f['container-id'])
            .subscribe((processes: any) => {
              this.customers1.push(...processes.processes);
              console.log(this.customers1)
            });
        });

        this.loading = false;
      });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
