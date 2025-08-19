import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * @return {usernames: this.usernames, sysroleIds: this.sysrolesIds}
 */

@Component({
  selector: 'spr-permission-selection',
  templateUrl: './permission-selection.component.html',
  styleUrls: ['./permission-selection.component.css']
})
export class PermissionSelectionComponent {
  onSysroleSelect($event: any) {
    this.sysrolesIds = $event.map((m: any) => m.code);
  }
  usernames?: []
  sysrolesIds?: []

  constructor(
    private dialogRef: MatDialogRef<PermissionSelectionComponent>
  ) { }
  onUserSelect($event: any) {
    console.log($event)
    this.usernames = $event.map((m: any) => m.username)
  }

  close() {
    this.dialogRef.close({usernames: this.usernames, sysroleIds: this.sysrolesIds})
  }

}
