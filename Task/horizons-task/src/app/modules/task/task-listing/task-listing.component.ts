import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from '../../../interfaces/ITask';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent implements OnInit {

  tasks: any[]=[];

  task: ITask;

  getTasks() {
    this.taskService.getTasks().subscribe(res => {
      this.taskService.tasks = res;
      this.tasks=this.taskService.tasks;
    });
     
    debugger;
  }

  deleteTask(id: number) {
    var task = this.taskService.tasks.map(function (item) { return item.id; }).indexOf(id);
    this.taskService.tasks.splice(task, 1);
    this.taskService.deleteTask(id).subscribe();
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    debugger;
    this.getTasks();
  }
}
