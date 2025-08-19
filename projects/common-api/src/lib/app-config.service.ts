import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { PageImpl, PEM_BASE_PATH } from "../public-api";

export interface ApiResponse {
  code: string,
  msg: string,
  data: any
}



@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(
    private http: HttpClient,
    @Inject(PEM_BASE_PATH) private apiBase: string
  ) { }

  /**
   * body为必须含id值的对象
   * @param body
   * @returns
   */
  save(body: any[]) {
    return this.http.patch<ApiResponse>(`${this.apiBase}/app-configs`, body)
  }


  /**
   * 删除对象，
   * @param body 对象id
   * @returns
   */
  delete(body: string[]) {
    return this.http.delete(`${this.apiBase}/app-configs`, { params: { id: body } })
  }

  /**
   * 对象列表
   * @param pageable
   * @param filter
   * @returns
   */
  filter(pageable: { page: number, size: number, sort: string[] }, filter: string | undefined) {
    const params = filter ? { ...pageable, filter: filter } : { ...pageable }

    return this.http.get<PageImpl>(`${this.apiBase}/app-configs`, { params: params })
  }

  /**
   * 获取对象详情
   * @param id
   * @returns
   */
  get(id: any) {
    return this.http.get<any>(`${this.apiBase}/app-configs/${id}`)
  }

  getAttachemnt(attachmentId: string) {
    return this.http.get<any>(`${this.apiBase}/app-configs/attachments/${attachmentId}`)
  }

  deleteAttachment(attachmentIds: string[]) {
    return this.http.delete(`${this.apiBase}/app-configs/attachments`, { params: { id: attachmentIds } })
  }
}
