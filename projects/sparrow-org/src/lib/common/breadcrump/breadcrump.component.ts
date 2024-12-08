import { Component, Input, OnInit } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

@Component({
  selector: 'lib-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {
  @Input() public color='primary'

  breadCrump: any[] = [];
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.breadCrump = [];
        this.breadCrump.push({
          label: route?.data['title'],
          url: route?.url[0]?.path,
        });
        let child: ActivatedRouteSnapshot[] | undefined = route?.children;
        child?.forEach((f) => {
          this.breadCrump.push({ label: f.data['title'], url: f.url[0].path });
          let url: UrlSegment[] = f.url;
        });
      }
    });
  }

  ngOnInit(): void { }

}
