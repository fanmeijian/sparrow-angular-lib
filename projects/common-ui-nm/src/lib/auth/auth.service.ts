import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { PageImpl, PEM_BASE_PATH } from "@sparrowmini/common-api";

// export const PEM_BASH_HREF: InjectionToken<string> = new InjectionToken<string>('apiBase')

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(PEM_BASE_PATH) public apiBase: string
  ) {

  }

  users(pageable: any, filter?: string) {
    const params = filter? {filter:filter, ...pageable}: pageable
    return this.http.get<PageImpl>(`${this.apiBase}/users/filter`, { params: params });
  }

  sysroles(pageable: any, filter?: string) {
    const params = filter? {filter:filter, ...pageable}: pageable
    return this.http.get<PageImpl>(`${this.apiBase}/sysroles/filter`, { params: params });
  }
}
