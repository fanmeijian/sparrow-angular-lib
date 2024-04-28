import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaskInstancesService, ProcessQueriesService } from '@sparrowmini/jbpm-api';
import { UserService } from '@sparrowmini/sparrow-keycloak-admin-api';
import { FormBuilder } from 'formiojs';
import { map, switchMap, zip, of } from 'rxjs';

@Component({
  selector: 'lib-task-comment',
  templateUrl: './task-comment.component.html',
  styleUrls: ['./task-comment.component.css']
})
export class TaskCommentComponent implements OnInit {
  user: any = {}
  username = ''
  addComment() {
    this.showComment === true;
  }
  showComment: boolean = false;
  delete(arg0: any) {
    this.taskInstancesService
      .deleteComment(this.data['task-container-id'], this.data['task-id'], arg0)
      .subscribe(() => {
        this.getComments();
      });
  }
  @Input()
  public data: any;

  taskComments: any;
  save() {
    // let user = JSON.parse(sessionStorage.getItem("user")!)
    this.user = JSON.parse(sessionStorage.getItem("user")!)
    this.taskInstancesService
      .addComment1(
        this.data['task-container-id'],
        this.data['task-id'],
        JSON.stringify({
          comment: this.comment,
          'comment-added-by': this.user.username,
          'comment-added-at': new Date().getTime(),
        })
      )
      .subscribe(() => {
        this.getComments();
        this.comment = '';
        this.showComment = false;
      });
  }

  comment: string = '';

  constructor(
    private taskInstancesService: TaskInstancesService,
    private processQueriesService: ProcessQueriesService,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getComments();
  }

  ngOnInit(): void {
  }

  getComments() {
    if(this.data){
      this.processQueriesService
      .getTasksByStatusByProcessInstanceId(
        this.data['task-process-instance-id'],
        ['Completed', 'InProgress', 'Created', 'Ready', 'Reserved'],
        0,
        10000,
        'createdOn',
        false
      )
      .pipe(
        map((res: any) => res['task-summary']),
        switchMap((res) =>
          zip(
            ...res.map((task: any) =>
              this.taskInstancesService
                .getCommentsByTaskId(task['task-container-id'], task['task-id'])
                .pipe(
                  map((comments: any) => comments['task-comment'].reverse()),
                  // switchMap((comments: any[]) =>
                  // comments.length===0?of([]): zip(
                  //     ...comments.map((comment: any) =>
                  //      this.userService
                  //             .userInfo(comment['comment-added-by'])
                  //             .pipe(
                  //               map((r) =>
                  //                 Object.assign({}, comment, {
                  //                   'comment-added-by-info': r,
                  //                 })
                  //               )
                  //             )
                  //     )
                  //   )
                  // ),
                  map((comments: any) =>
                    Object.assign({}, { comments: comments }, task)
                  )
                )
            )
          )
        )
      )

      .subscribe((res: any) => {
        // console.log(res);
        this.taskComments = res;
      });
    }
    // this.taskInstancesService
    //   .getCommentsByTaskId(this.data['task-container-id'], this.data['task-id'])
    //   .subscribe((res: any) => {
    //     this.taskComments = res['task-comment'];
    //     console.log(res);
    //   });
  }
}
