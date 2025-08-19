import { HttpClient } from "@angular/common/http"
import { Injectable, Inject } from "@angular/core"
import { BASE_PATH } from "./common-api.service"

@Injectable({
  providedIn: 'root'
})
export class CommonTreeService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private apiBase: string
  ) { }

  upsert(className: string, body: any[]) {
    return this.http.post(`${this.apiBase}/common-tree`, body, { params: { className: className } })
  }

  delete(className: string, body: any[]) {
    return this.http.delete(`${this.apiBase}/common-tree`, { params: { id: body, className: className } })
  }

  children(className: string, pageable?: { page: number, size: number, sort: string[] }, parentId?: string, projectionClassName?: string) {
    const params: any = pageable ? { ...pageable, className: className } : { className: className }

    if (parentId) {
      params.parentId = parentId
    }

    if (projectionClassName) {
      params.projectionClassName = projectionClassName
    }

    return this.http.get(`${this.apiBase}/common-tree/children`, { params: params })
  }

  get(className: string, id: any) {
    return this.http.get(`${this.apiBase}/common-tree`, { params: { id: id, className: className } })
  }

  move(currentId: string, nextId: string, className: string) {
    return this.http.patch(`${this.apiBase}/common-tree/move`, [], { params: { currentId: currentId, nextId: nextId, className: className } })
  }
}
