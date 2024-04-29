import { Component, Input, OnInit } from '@angular/core';
import { TaskInstancesService } from '@sparrowmini/jbpm-api';

@Component({
  selector: 'lib-task-execution',
  templateUrl: './task-execution.component.html',
  styleUrls: ['./task-execution.component.css']
})
export class TaskExecutionComponent implements OnInit {

  @Input() taskInstanceId: number = 0
  @Input() containerId: string = ''

  constructor(
    private taskInstanceService: TaskInstancesService
  ) { }

  ngOnInit(): void {
  }

  forward(){
    this.taskInstanceService.forward(this.containerId,this.taskInstanceId,'super_sysadmin').subscribe()
  }

  delegate(){
    this.taskInstanceService.delegate(this.containerId,this.taskInstanceId,'super_sysadmin').subscribe()
  }

  resume(){
    this.taskInstanceService.resume(this.containerId,this.taskInstanceId).subscribe()
  }

  suspend(){
    this.taskInstanceService.suspend(this.containerId,this.taskInstanceId).subscribe()
  }

  skip(){
    this.taskInstanceService.skip(this.containerId,this.taskInstanceId).subscribe()
  }

  complete(){
    // this.taskInstanceService.complete(this.containerId,this.taskInstanceId).subscribe()
  }

}
