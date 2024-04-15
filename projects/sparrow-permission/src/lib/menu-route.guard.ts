import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { MenuService } from '@sparrowmini/org-api';
import { stat } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuRouteGuard implements CanActivate {
  constructor(private menuService: MenuService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let menusStr: any = sessionStorage.getItem('menus');
    // console.log(state.url, menusStr);

    // if (menusStr != null) {
    //   let menus: any[] = JSON.parse(menusStr);
    //   if (menus.findIndex((f) => f.path === state.url) >= 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
    return true
  }
}
