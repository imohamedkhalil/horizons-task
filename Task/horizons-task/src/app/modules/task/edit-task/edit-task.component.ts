import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { TaskService } from '../../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: ITask;
  // tasks: any[] = this.taskService.tasks;

  getTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(id);
    console.log(this.task);
  }

  goBack() {
    this.location.back();
  }

  onSave(form) {
    debugger;
    this.task = this.taskService.getTask(this.task.id);
    console.log(this.task);
    var i = this.taskService.tasks.indexOf(this.task);
    console.log(i);
    this.task = {
      id: this.task.id,
      name: form.value.name == undefined ? this.task.name : form.value.name,
      description: form.value.description == undefined ? this.task.description : form.value.description,
      assigneeName: form.value.assigneeName == undefined ? this.task.assigneeName : form.value.assigneeName,
      date: form.value.date == undefined ? this.task.date : form.value.date,
    }
    this.taskService.tasks[i] = this.task;
    console.log(this.taskService.tasks);
    this.taskService.editTask(this.task).subscribe();
    this.router.navigate(['/tasks']);

  }

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTask();
  }

}
