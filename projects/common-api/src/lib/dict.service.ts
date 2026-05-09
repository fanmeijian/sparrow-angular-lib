import { HttpClient } from "@angular/common/http"
import { Injectable, Inject } from "@angular/core"
import { BASE_PATH } from "./common-api.service"

@Injectable({
  providedIn: 'root'
})
export class DictService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private apiBase: string
  ) { }

  upsert(body: any[]) {
    return this.http.post(`${this.apiBase}/dict`, body)
  }

  delete(body: any[]) {
    return this.http.delete(`${this.apiBase}/dict`, { params: { id: body } })
  }

  children(pageable?: { page: number, size: number, sort: string[] }, parentId?: string, projectionClassName?: string) {
    const params: any = pageable ? { ...pageable } : {}

    if (parentId) {
      params.parentId = parentId
    }

    if (projectionClassName) {
      params.projectionClassName = projectionClassName
    }

    return this.http.get(`${this.apiBase}/dict/children`, { params: params })
  }

  get(id: any) {
    return this.http.get(`${this.apiBase}/dict`, { params: { id: id } })
  }

  move(currentId: string, nextId: string) {
    return this.http.patch(`${this.apiBase}/dict/move`, [], { params: { currentId: currentId, nextId: nextId } })
  }
}
