import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Pageable } from '../model/pageable';
import { UserTaskInstance } from '../model/user-task-instance';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { ProcessInstance } from '../model/ProcessInstance';
import { ProcessDefinition } from '../model/ProcessDefinition';
import { PublishedProcess } from '../model/PublishedProcess';
import { Comment } from '../model/comment';
import { Attachment } from '../model/attachment';
import { BASE_PATH } from './BpmApi';

@Injectable({
  providedIn: 'root'
})
export class SparrowBpmApiService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private basePath: string
  ) { }


  /**
   * 获取流程图
   * @param processId 
   * @param version 
   * @param processInstanceId 
   * @returns 
   */
  processSvg(processId: string, version?: string, processInstanceId?: string): any {
    const apiPath = `${this.basePath}/process/svg`
    return this.http.get(`${apiPath}`)
  }

  /**
   * 获取用户的任务
   * @param pageable 
   * @param filter 
   * @returns 
   */
  todoTasks() {
    const apiPath = `${this.basePath}/usertasks/instance`
    return this.http.get<UserTaskInstance[]>(`${apiPath}`)
  }

  doneTasks(pageable?: Pageable, filter?: string) {
    const apiPath = `${this.basePath}/usertasks`
    const params = filter ? { ...pageable, filter: filter } : pageable
    return this.http.get<Page<UserTaskInstance>>(`${apiPath}`, { params: { ...params } })
  }

  /**
   * 
   * @param id 流程详情
   * @returns 
   */
  processInstance(id: string) {
    const apiPath = `${this.basePath}/processes/${id}`
    return this.http.get<ProcessInstance>(`${apiPath}`)
  }

  /**
   * 可用的已发布流程
   * @returns 
   */
  publishedProcess(pageable?: Pageable, filter?: string) {
    const apiPath = `${this.basePath}/published-processes`
    const params = filter ? { ...pageable, filter: filter } : pageable
    return this.http.get<Page<PublishedProcess>>(`${apiPath}`, { params: { ...params } })
  }

  startProcess(processId: string, variables: any) {
    const apiPath = `${this.basePath}/${processId}`
    return this.http.post(`${apiPath}`, variables)
  }

  abortProcessInstance(processInstanceId: string, processId?: string) {
    const apiPath = `${this.basePath}/management/processes/${processId}/instances/${processInstanceId}`
    return this.http.delete(`${apiPath}`)
  }

  updateProcessVariables(processInstanceId: string, variables: any, processId?: string) {
    const apiPath = `${this.basePath}/${processId}/${processInstanceId}`
    return this.http.patch(`${apiPath}`, variables)

  }

  updateTaskOutput(taskInstanceId: string, output: any) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/outputs`
    return this.http.put(`${apiPath}`, output)

  }

  skipTask(taskInstanceId: string) {

  }

  transitTask(taskInstanceId: string, taskState: string, output: any, taskName?: string, processId?: string, processInstanceId?: string) {
    const apiPath = `${this.basePath}/${processId}/${processInstanceId}/${taskName}/${taskInstanceId}/phases/${taskState}`
    return this.http.post(`${apiPath}`, output)
  }

  addAttachment(taskInstanceId: string, attachment: { uri: string, name: string }) {

    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.post<Attachment>(`${apiPath}`, attachment)

  }

  deleteAttachment(taskInstanceId: string, attachmentId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments/${attachmentId}`
    return this.http.delete(`${apiPath}`)
  }

  attachment(taskInstanceId: string, attachmentId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments/${attachmentId}`
    return this.http.get<Attachment>(`${apiPath}`)
  }

  attachments(taskInstanceId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.get<Attachment[]>(`${apiPath}`)
  }


  addComment(taskInstanceId: string, comment: { comment: string }) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments`
    return this.http.post<Comment>(`${apiPath}`, comment)
  }

  deleteComment(taskInstanceId: string, commentId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments/${commentId}`
    return this.http.delete(`${apiPath}`)
  }

  comment(taskInstanceId: string, commentId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/comments/${commentId}`
    return this.http.get<Comment>(`${apiPath}`)
  }

  comments(taskInstanceId: string) {
    const apiPath = `${this.basePath}/usertasks/instance/${taskInstanceId}/attachments`
    return this.http.get<Comment[]>(`${apiPath}`)
  }

  triggerNode(processId: string, processInstanceId: string, nodeId: string) {
    const apiPath = `${this.basePath}/management/processes/${processId}/instances/${processInstanceId}/nodes/${nodeId}`
    return this.http.post(apiPath, {})
  }

}
