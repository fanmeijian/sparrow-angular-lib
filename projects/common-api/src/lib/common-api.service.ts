import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { PageImpl } from './model/pageimpl';

/**
 * base为服务器的路径，不包含/common-jpa-controller
 */
export const BASE_PATH = new InjectionToken<string>('apiBase')

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private apiBase: string
  ) { }


  upsert(className: string, body: any[]) {
    return body ? this.http.post(`${this.apiBase}/common-jpa`, body, { params: { className: className } }) : of([])
  }

  delete(className: string, body: any[]) {
    return this.http.delete(`${this.apiBase}/common-jpa`, { params: { id: JSON.stringify(body), className: className } })
  }

  filter(className: string, pageable?: { page: number, size: number, sort: string[] }, filter?: string, projectionClassName?: string) {
    const params: any = pageable ? { ...pageable, className: className } : { className: className }

    if (projectionClassName) {
      params.projectionClassName = projectionClassName
    }

    if(filter){
      params.filter=filter
    }

    return this.http.get<PageImpl>(`${this.apiBase}/common-jpa/filter`, { params: params })
  }

  get(className: string, id: any) {
    const params = new HttpParams({ fromObject: { id: id, className: className } })
    return this.http.get(`${this.apiBase}/common-jpa`, { params: params })
  }


}
