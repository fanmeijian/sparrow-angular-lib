import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RoutesRecognized,
  UrlSegment,
} from '@angular/router';

@Component({
  selector: 'spr-sparrow-breadcrumb',
  templateUrl: './sparrow-breadcrumb.component.html',
  styleUrls: ['./sparrow-breadcrumb.component.css'],
})
export class SparrowBreadcrumbComponent implements OnInit {
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

  ngOnInit(): void {}
}
