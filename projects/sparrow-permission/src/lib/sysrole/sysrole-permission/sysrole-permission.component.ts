import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuService, SysroleService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-sysrole-permission',
  templateUrl: './sysrole-permission.component.html',
  styleUrls: ['./sysrole-permission.component.css'],
})
export class SysrolePermissionComponent implements OnInit {
  selectedSysroles: any[] = [];
  users: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sysroleService: SysroleService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  submit() {
    this.sysroleService.addSysroleUsers([this.users], this.data.id).subscribe();
  }
}
