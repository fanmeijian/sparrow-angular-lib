import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PemgroupService } from '@sparrowmini/permission-api';

@Component({
  selector: 'lib-pemgroup-member',
  templateUrl: './pemgroup-member.component.html',
  styleUrls: ['./pemgroup-member.component.css']
})
export class PemgroupMemberComponent implements OnInit {
  selectedSysroles: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sysroleService: PemgroupService,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  submit() {
    this.sysroleService.addGroupMembers(this.selectedSysroles.map(m=>m.id),'SYSROLE', this.data.id).subscribe();
    this.sysroleService.addGroupMembers(this.fruits.map(m=>m.name),'USER', this.data.id).subscribe();
  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
