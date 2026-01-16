import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BASE_PATH } from '@sparrowmini/bpm-api';
import { Pageable } from '@sparrowmini/common-api';
import { Attachment } from 'dist/sparrow-bpm-api/model/attachment';
import { Page } from 'dist/sparrow-bpm-api/model/page';
import { ProcessInstance } from 'dist/sparrow-bpm-api/model/ProcessInstance';
import { PublishedProcess } from 'dist/sparrow-bpm-api/model/PublishedProcess';
import { UserTaskInstance } from 'dist/sparrow-bpm-api/model/user-task-instance';
import { Observable } from 'rxjs';
import { BpmApi } from 'sparrow-bpm-api';


@Injectable({
  providedIn: 'root'
})
export class SparrowBpmApiImplJbpmService implements BpmApi {

  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private basePath: string
  ) { }
  processSvg(processId: string, version?: string, processInstanceId?: string) {
    const apiPath = `${this.basePath}/process/svg`
    return this.http.get(`${apiPath}`)
  }
  todoTasks(): Observable<UserTaskInstance[]> {
    const apiPath = `${this.basePath}/usertasks/instance`
    return this.http.get<UserTaskInstance[]>(`${apiPath}`)
  }
  doneTasks(pageable?: Pageable, filter?: string): Observable<Page<UserTaskInstance>> {
    const apiPath = `${this.basePath}/usertasks`
    const params = filter ? { ...pageable, filter: filter } : pageable
    return this.http.get<Page<UserTaskInstance>>(`${apiPath}`, { params: { ...params } })
  }
  processInstance(id: string): Observable<ProcessInstance> {
    const apiPath = `${this.basePath}/processes/${id}`
    return this.http.get<ProcessInstance>(`${apiPath}`)
  }
  publishedProcess(pageable?: Pageable, filter?: string): Observable<Page<PublishedProcess>> {
    const apiPath = `${this.basePath}/published-processes`
    const params = filter ? { ...pageable, filter: filter } : pageable
    return this.http.get<Page<PublishedProcess>>(`${apiPath}`, { params: { ...params } })
  }
  startProcess(processId: string, variables: any): Observable<any> {
    const apiPath = `${this.basePath}/${processId}`
    return this.http.post(`${apiPath}`, variables)
  }
  abortProcessInstance(processInstanceId: string, processId?: string): Observable<void> {
    const apiPath = `${this.basePath}/management/processes/${processId}/instances/${processInstanceId}`
    return this.http.delete<void>(`${apiPath}`)
  }
  updateProcessVariables(processInstanceId: string, variables: any, processId?: string): Observable<void> {
    const apiPath = `${this.basePath}/${processId}/${processInstanceId}`
    return this.http.patch<void>(`${apiPath}`, variables)
  }
  updateTaskOutput(taskInstanceId: string, output: any): Observable<void> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/outputs`
    return this.http.put<void>(`${apiPath}`, output)
  }
  skipTask(taskInstanceId: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
  transitTask(taskInstanceId: string, taskState: string, output: any, taskName?: string, processId?: string, processInstanceId?: string): Observable<void> {
    const apiPath = `${this.basePath}/${processId}/${processInstanceId}/${taskName}/${taskInstanceId}/phases/${taskState}`
    return this.http.post<void>(`${apiPath}`, output)
  }
  addAttachment(taskInstanceId: string, attachment: { uri: string; name: string; }): Observable<void> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.post<void>(`${apiPath}`, attachment)
  }
  deleteAttachment(taskInstanceId: string, attachmentId: string): Observable<void> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments/${attachmentId}`
    return this.http.delete<void>(`${apiPath}`)
  }
  attachment(taskInstanceId: string, attachmentId: string): Observable<Attachment> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments/${attachmentId}`
    return this.http.get<Attachment>(`${apiPath}`)
  }
  attachments(taskInstanceId: string): Observable<Attachment[]> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.get<Attachment[]>(`${apiPath}`)
  }
  addComment(taskInstanceId: string, comment: { comment: string; }): Observable<void> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments`
    return this.http.post<void>(`${apiPath}`, comment)
  }
  deleteComment(taskInstanceId: string, commentId: string): Observable<void> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments/${commentId}`
    return this.http.delete<void>(`${apiPath}`)
  }
  comment(taskInstanceId: string, commentId: string): Observable<Comment> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments/${commentId}`
    return this.http.get<Comment>(`${apiPath}`)
  }
  comments(taskInstanceId: string): Observable<Comment[]> {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.get<Comment[]>(`${apiPath}`)
  }
  triggerNode(processId: string, processInstanceId: string, nodeId: string): Observable<void> {
    const apiPath = `${this.basePath}/management/processes/${processId}/instances/${processInstanceId}/nodes/${nodeId}`
    return this.http.post<void>(apiPath, {})
  }

}
