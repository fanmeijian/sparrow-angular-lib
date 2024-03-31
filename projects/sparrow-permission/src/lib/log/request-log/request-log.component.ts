import { Component, OnInit } from '@angular/core';
import { AuditlogService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-request-log',
  templateUrl: './request-log.component.html',
  styleUrls: ['./request-log.component.css'],
})
export class RequestLogComponent implements OnInit {
  logs?: any[] = [];
  pageable: any = { pageSize: 20, pageIndex: 0, length: 0 };

  constructor(private auditLogService: AuditlogService) {}

  ngOnInit(): void {
    this.onPageChange(this.pageable);
  }

  onPageChange(event: any) {
    this.auditLogService
      .getAllRequestLogs(undefined, event.pageIndex, event.pageSize,['createdDate,desc'])
      .subscribe((res) => {
        this.logs = res.content;
        this.pageable.length = res.totalElements;
      });

      this.auditLogService.logs("ff8080818d088243018d08974ff60001","cn.sparrowmini.pem.model.Sysrole",event.pageIndex, event.pageSize,['createdDate,desc']).subscribe()

  }
}
