import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-menu-permission',
  templateUrl: './menu-permission.component.html',
  styleUrls: ['./menu-permission.component.css']
})
export class MenuPermissionComponent implements OnInit {

  selectedSysroles: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    console.log(this.data)

  }

  submit(){
    let menus=this.data.map((m:any)=>m.id)
    console.log(this.selectedSysroles)
    menus.forEach((menuId: string)=>{
      this.menuService.addMenuPermissions(this.selectedSysroles.map(m=>m.id),'SYSROLE',menuId).subscribe()
    })
  }

}
