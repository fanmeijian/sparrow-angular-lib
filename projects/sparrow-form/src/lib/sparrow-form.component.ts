import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sparrow-form',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SparrowFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
