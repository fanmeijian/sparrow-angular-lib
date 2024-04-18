# SparrowPermission

install lib

npm i @sparrowmini/org-api @sparrowmini/sparrow-permission @sparrowmini/sparrow-org json-diff-ts monaco-editor

add module

import {
  ApiModule as OrgApiModule,
  BASE_PATH as OrgApi_BASE_PATH,
} from '@sparrowmini/org-api';
import { SparrowOrgModule } from '@sparrowmini/sparrow-org';
import {
  MenuRouteGuard,
  SparrowPermissionModule,
} from '@sparrowmini/sparrow-permission';

    OrgApiModule,
    SparrowPermissionModule,
    SparrowOrgModule,

set provider:
{ provide: OrgApi_BASE_PATH, useValue: environment.orgApiBase },

add route

{
    path: 'permission',
    data: { title: '权限管理' },
    component: SparrowPermissionComponent,
    children: [
      { path: 'menu', data: { title: '菜单管理' }, component: MenuComponent },
      {
        path: 'sysrole',
        data: { title: '角色管理' },
        component: SysrolesComponent,
      },
      {
        path: 'scope',
        data: { title: '功能管理' },
        component: ScopesComponent,
      },
      {
        path: 'model',
        data: { title: '模型管理' },
        component: SprmodesComponent,
      },
      {
        path: 'pemgroup',
        data: { title: '群组管理' },
        component: PemgroupsComponent,
      },
      {
        path: 'data-permissions',
        data: { title: '权限管理' },
        component: DataPermissionsComponent,
      },
      {
        path: 'users',
        data: { title: '用户管理' },
        component: UserListComponent,
      },
      {
        path: 'files',
        data: { title: '文件管理' },
        component: FilesComponent,
      },
    ],
  },
  {
    path: 'log',
    data: { title: '系统管理' },
    component: SparrowPermissionComponent,
    children: [
      {
        path: 'request-logs',
        data: { title: '请求日志' },
        component: RequestLogComponent,
      },
      {
        path: 'delete-logs',
        data: { title: '删除日志' },
        component: DeleteLogComponent,
      },
      {
        path: 'edit-logs',
        data: { title: '更新日志' },
        component: EditLogComponent,
      },
    ],
  },
  {
    path: 'organization',
    data: { title: '组织管理' },
    component: SparrowOrgComponent,
    children: [
      {
        path: 'organizations',
        data: { title: '机构列表' },
        component: OrgsComponent,
      },
      { path: 'roles', data: { title: '岗位列表' }, component: RolesComponent },
      {
        path: 'levels',
        data: { title: '级别列表' },
        component: LevelsComponent,
      },
      {
        path: 'groups',
        data: { title: '群组列表' },
        component: OrggroupsComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        data: { title: '员工列表' },
      },
    ],
  },


add menu for user:

<lib-menu-tree></lib-menu-tree>


add style:

.twocolumn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.twocolumn-box>span {
  flex: 0 1 45%;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.twocolumn-box>span:nth-child(even) {
  background-color: #e5e5e5;
}

.tree-right {
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
}
