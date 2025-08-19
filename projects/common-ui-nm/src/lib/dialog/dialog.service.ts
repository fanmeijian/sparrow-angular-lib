import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) { }

  open<T>(component: any, data?: T) {
    return this.dialog.open(component, {
      data,
      width: '500px',
      disableClose: true,
      autoFocus: false,
      panelClass: 'my-dialog-panel'
    });
  }

  confirm(message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      data: { message },
    }).afterClosed();
  }
}
