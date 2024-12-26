import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-solr-search-result',
  templateUrl: './solr-search-result.component.html',
  styleUrls: ['./solr-search-result.component.css']
})
export class SolrSearchResultComponent implements OnInit {
  sresult :any [] = []

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      this.httpClient.get('http://localhost:8515/payment-service/solr-search?q=' + params.q).subscribe((res:any) => {
        // this.sresult = res.data.body.map((k:any,v:any)=> v[0])
        this.sresult = res.data
        console.log('sresult', this.sresult)

      })
    })

  }

}
