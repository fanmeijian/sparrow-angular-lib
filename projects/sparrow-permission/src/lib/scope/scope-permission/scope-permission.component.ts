import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScopeService, SysroleService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-scope-permission',
  templateUrl: './scope-permission.component.html',
  styleUrls: ['./scope-permission.component.css']
})
export class ScopePermissionComponent implements OnInit {
  selectedSysroles: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sysroleService: ScopeService,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  submit() {
    this.sysroleService.addScopePermissions(this.selectedSysroles.map(m=>m.id),'SYSROLE', this.data.id).subscribe();
  }

}
