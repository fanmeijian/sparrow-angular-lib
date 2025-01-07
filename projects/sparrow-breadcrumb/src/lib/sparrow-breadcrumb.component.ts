import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RoutesRecognized,
  UrlSegment,
} from '@angular/router';
import { Breadcrumb, BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'spr-sparrow-breadcrumb',
  templateUrl: './sparrow-breadcrumb.component.html',
  styleUrls: ['./sparrow-breadcrumb.component.css'],
})
export class SparrowBreadcrumbComponent implements OnInit {
  @Input() public color = 'primary'
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
