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

export const BASE_PATH = new InjectionToken<string>('basePath')

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
    const apiPath = `${this.basePath}/usertasks`
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
    const apiPath = `${this.basePath}/processes/start`
    return this.http.post(`${apiPath}`, variables)
  }

  abortProcessInstance(processInstanceId: string) {
    const apiPath = `${this.basePath}/processes/abort`
    return this.http.delete(`${apiPath}`)
  }

  updateProcessVariables(processInstanceId: string, variables: any) {

  }

  updateTaskOutput(taskInstanceId: string, output: any) {

  }

  skipTask(taskInstanceId: string) {

  }

  transitTask(taskInstanceId: string, taskState: string, output: any) {

  }

  addAttachment(taskInstanceId: string, comment: {uri: string,name: string}) {

  }

  deleteAttachment(taskInstanceId: string, attachmentId: string){

  }

  attachment(taskInstanceId: string, attachmentId: string) {

  }

  attachments(taskInstanceId: string) {
    const apiPath = `${this.basePath}/published-processes`
    return this.http.get<Comment[]>(`${apiPath}` )
  }


  addComment(taskInstanceId: string, comment: {comment: string}) {

  }

  deleteComment(taskInstanceId: string, commentId: string){

  }

  comment(taskInstanceId: string, commentId: string) {

  }

  comments(taskInstanceId: string) {
    const apiPath = `${this.basePath}/published-processes`
    return this.http.get<Comment[]>(`${apiPath}` )
  }

}
