import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpUrlEncodingCodec} from "@angular/common/http";
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

  export(type: 'PDF'|'WORD'|'EXCEL'|'CSV') {
    this.reportService
      .exportReport(this.templateId!, type,'response')
      .subscribe((res: any) => {
        let fileName =decodeURI(res.headers.get('content-disposition').split(';')[1].trim().split('=')[1])
        console.log(fileName)

        // let file =new File([res.body],decodeURI(fileName) ,{ type: 'application/octet-stream' })
        // let downloadURL = URL.createObjectURL(file);
        // window.open(downloadURL);

        const objectUrl = URL.createObjectURL(res.body);
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        a.setAttribute('href', objectUrl);
        a.setAttribute('download', fileName);
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
  }

}
