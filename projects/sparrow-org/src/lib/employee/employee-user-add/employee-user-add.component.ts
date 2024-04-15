import { Component, Inject, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService, UserService } from '@sparrowmini/org-api';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'lib-employee-user-add',
  templateUrl: './employee-user-add.component.html',
  styleUrls: ['./employee-user-add.component.css'],
})
export class EmployeeUserAddComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {}
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  submit(){
    this.employeeService.addEmpolyeeUsers(this.fruits.map(m=>m.name),this.data.id).subscribe()
  }
}
