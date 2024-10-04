import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  DatamodelService,
  ModelAttributePermissionResponseBody,
  PermissionRequestBody,
  SysroleService,
} from '@sparrowmini/org-api';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SprmodelPermisssionComponent } from '../sprmodel-permisssion/sprmodel-permisssion.component';
import { map, tap, switchMap, zip, of, combineLatest, first } from 'rxjs';
import { AttributePermisssionComponent } from '../attribute-permisssion/attribute-permisssion.component';
import { MonacoEditorService } from '../../../service/monaco-editor.service';
import * as monaco from 'monaco-editor';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lib-sprmodes',
  templateUrl: './sprmodes.component.html',
  styleUrls: ['./sprmodes.component.css'],
})
export class SprmodesComponent implements OnInit {
  panelOpenState = false;

  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };
  displayedColumns = ['seq', 'code', 'users'];

  constructor(
    private modelService: DatamodelService,
    private dialog: MatDialog,
    private sysroleService: SysroleService,
    private http: HttpClient, // private monacoEditorService: MonacoEditorService
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onPageChange(this.pageable);
    // this.monacoEditorService.load();
    // this.monacoEditorService.initMonaco(this._editorContainer);
    // this.initMonaco();
  }

  onPageChange(event: any) {
    this.modelService
      .models()
      .pipe(
        tap((t: any) => (this.pageable.length = t.totalElements)),
        map((m) => m.content),
        switchMap((s: any[]) =>
          zip(
            ...s.map((model) => {
              let modelPermissions: any;
              const $modelPermissions = this.modelService
                .modelPermissions(model.id)
                .pipe(
                  switchMap((permissions: any) => {
                    const $sysroles =
                      permissions.sysroles!.length > 0
                        ? zip(
                            ...permissions.sysroles!.map((sysrole: any) =>
                              this.sysroleService
                                .sysrole(sysrole.id.sysroleId)
                                .pipe(
                                  map((mm) =>
                                    Object.assign({}, sysrole, { sysrole: mm })
                                  )
                                )
                            )
                          )
                        : of([]);
                    const $users = of(permissions.usernames);
                    const $rules = of(permissions.rules);
                    return combineLatest($sysroles, $users, $rules).pipe(
                      map((m) =>
                        Object.assign({}, model, {
                          sysroles: m[0],
                          users: m[1],
                          rules: m[2],
                        })
                      )
                    );
                  }),
                  tap((t) => (modelPermissions = t)),
                  map((res) => res.modelAttributes),
                  switchMap((mmp: any[]) =>
                    mmp.length > 0
                      ? zip(
                          ...mmp.map((attribute: any) =>
                            this.modelService
                              .attrPermissions(
                                attribute.id.modelId,
                                attribute.id.attributeId
                              )
                              .pipe(
                                switchMap((attrPermissions) => {
                                  const $sysroles =
                                    attrPermissions.sysroles!.length > 0
                                      ? zip(
                                          ...attrPermissions.sysroles!.map(
                                            (sysrole: any) =>
                                              this.sysroleService
                                                .sysrole(sysrole.id.sysroleId)
                                                .pipe(
                                                  map((mm) =>
                                                    Object.assign({}, sysrole, {
                                                      sysrole: mm,
                                                    })
                                                  )
                                                )
                                          )
                                        )
                                      : of([]);
                                  const $users = of(attrPermissions.usernames);
                                  const $rules = of(attrPermissions.rules);
                                  return combineLatest(
                                    $sysroles,
                                    $users,
                                    $rules
                                  ).pipe(
                                    map((m) =>
                                      Object.assign({}, attribute, {
                                        sysroles: m[0],
                                        users: m[1],
                                        rules: m[2],
                                      })
                                    )
                                  );
                                })
                              )
                          )
                        )
                      : of([])
                  ),
                  map((mmm) =>
                    Object.assign({}, modelPermissions, {
                      modelAttributes: mmm,
                    })
                  )
                );

              return $modelPermissions;
            })
          )
        )
      )
      .subscribe((res: any) => {
        // console.log(res);
        this.dataSource = new MatTableDataSource<any>(res);
      });
  }

  new() {}

  delete(sysrole: any) {}

  edit(sysrole: any) {}

  remove(user: any, sysrole: any) {
    // console.log(user, sysrole);
    this.modelService
      .removeModelPermissions({ sysroles: [user.id] }, user.id.modelId)
      .subscribe(() => {
        this.snack.open('移除成功！', '关闭');
        this.ngOnInit();
      });
  }

  removeUser(user: any, modelPermission: any) {
    // console.log(user, sysrole);
    this.modelService
      .removeModelPermissions({ usernames: [user.id] }, user.id.modelId)
      .subscribe(() => {
        this.snack.open('移除成功！', '关闭');
        this.ngOnInit();
      });
  }

  removeRule(user: any, sysrole: any) {
    // console.log(user, sysrole);
    this.modelService
      .removeModelPermissions({ rules: [user.id] }, user.id.modelId)
      .subscribe(() => {
        this.snack.open('移除成功！', '关闭');
        this.ngOnInit();
      });
  }

  removeAttrRule(user: any, sysrole: any) {
    // console.log(user, sysrole);
    this.modelService
      .removeAttrPermissions(
        { rules: [user.id] },
        user.id.modelAttributeId.modelId,
        user.id.modelAttributeId.attributeId
      )
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  removeAttrPermission(attr: any, body: PermissionRequestBody) {
    console.log(attr, body);
    this.modelService
      .removeAttrPermissions(
        body,
        attr.id.modelId,
        attr.id.attributeId
      )
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  openPermission(sysrole: any) {
    this.dialog
      .open(SprmodelPermisssionComponent, {
        data: sysrole,
        width: '100%',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.snack.open('授权成功！', '关闭');
          this.ngOnInit();
        }
      });
  }

  openAttrPermission(sysrole: any) {
    this.dialog
      .open(AttributePermisssionComponent, {
        width: '100%',
        data: sysrole,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.snack.open('授权成功！', '关闭');
          this.ngOnInit();
        }
      });
  }

  public _editor: any;
  @ViewChild('editorContainer', { static: true })
  _editorContainer!: ElementRef<any>;
}
