import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css'],
})
export class ViewReportComponent implements OnInit {
  reportHtmlStr: any;
  templateId?: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private reportService: ReportService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.templateId) {
        this.templateId = params.templateId;
        this.reportService
          .exportReport(this.templateId!, 'HTML')
          .subscribe((res: any) => {
            res.text().then((text: any) => {
              this.reportHtmlStr = this.sanitizer.bypassSecurityTrustHtml(text);
            });
          });
      }
    });
  }

  exportPdf() {
    this.reportService
      .exportReport(this.templateId!, 'PDF')
      .subscribe((res: any) => {
        let downloadURL = URL.createObjectURL(res);
        window.open(downloadURL);
      });
  }
}
