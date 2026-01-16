import { Pageable } from "@sparrowmini/common-api"
import { filter, Observable } from "rxjs"
import { Page } from "../model/page"
import { PublishedProcess } from "../model/PublishedProcess"
import { UserTaskInstance } from "../model/user-task-instance"
import { ProcessInstance } from "../model/ProcessInstance"
import { Attachment } from "../model/attachment"
import { InjectionToken } from "@angular/core"
export const BASE_PATH = new InjectionToken<string>('basePath')
export const BPM_API_TOKEN = new InjectionToken<BpmApi>('BPM_API_TOKEN');

export interface BpmApi {
    /**
       * 获取流程图
       * @param processId 
       * @param version 
       * @param processInstanceId 
       * @returns 
       */
    processSvg(processId: string, version?: string, processInstanceId?: string): any

    /**
     * 获取用户的任务
     * @param pageable 
     * @param filter 
     * @returns 
     */
    todoTasks(): Observable<UserTaskInstance[]>

    doneTasks(pageable?: Pageable, filter?: string): Observable<Page<UserTaskInstance>>

    /**
     * 
     * @param id 流程详情
     * @returns 
     */
    processInstance(id: string): Observable<ProcessInstance>

    /**
     * 可用的已发布流程
     * @returns 
     */
    publishedProcess(pageable?: Pageable, filter?: string): Observable<Page<PublishedProcess>>

    startProcess(processId: string, variables: any): Observable<any>

    abortProcessInstance(processInstanceId: string, processId?: string): Observable<void>

    updateProcessVariables(processInstanceId: string, variables: any, processId?: string): Observable<void>

    updateTaskOutput(taskInstanceId: string, output: any): Observable<void>

    skipTask(taskInstanceId: string): Observable<void>

    transitTask(taskInstanceId: string, taskState: string, output: any, taskName?: string, processId?: string, processInstanceId?: string): Observable<void>

    addAttachment(taskInstanceId: string, attachment: { uri: string, name: string }): Observable<void>

    deleteAttachment(taskInstanceId: string, attachmentId: string): Observable<void>
    attachment(taskInstanceId: string, attachmentId: string): Observable<Attachment>

    attachments(taskInstanceId: string): Observable<Attachment[]>


    addComment(taskInstanceId: string, comment: { comment: string }): Observable<void>

    deleteComment(taskInstanceId: string, commentId: string): Observable<void>

    comment(taskInstanceId: string, commentId: string): Observable<Comment>

    comments(taskInstanceId: string): Observable<Comment[]>
    triggerNode(processId: string, processInstanceId: string, nodeId: string): Observable<void>
}