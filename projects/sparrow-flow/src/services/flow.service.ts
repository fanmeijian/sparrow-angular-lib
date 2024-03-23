import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  constructor() { }

  getFlowStatusName(status: any) {
    let green = 'color: green; font-size:12px;border-radius:3px;padding:3px;';
    let grey = 'color: grey; font-size:12px;border-radius:3px;padding:3px;';
    let red = 'color: red; font-size:12px;border-radius:3px;padding:3px;';
    switch (status) {
      case 'Reserved':
      case 'Ready':
      case 'InProgress':
        return {
          name: '待处理',
          style: green,
        };
      case 'Completed':
        return {
          name: '已处理',
          style: grey,
        };
      case 2:
        return {
          name: '已结束',
          style: grey,
        };
      case 3:
        return {
          name: '中止',
          style: red,
        };
      case 1:
        return {
          name: '进行中',
          style: green,
        };
      default:
        return { name: '', style: '' };
    }
  }
}
