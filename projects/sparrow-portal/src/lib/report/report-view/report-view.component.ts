import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ReportService} from "@sparrowmini/report-api";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'lib-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
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
