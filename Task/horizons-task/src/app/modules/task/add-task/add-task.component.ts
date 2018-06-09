import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../interfaces/ITask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  tasks: ITask[];
  task: ITask;

  onSubmit(form) {
    this.taskService.tasks.push(form.value);
    this.taskService.addTask(form).subscribe(task => this.taskService.tasks.push(task));
    this.router.navigate(['../tasks']);
  }

  goBack() {
    this.location.back();
  }

  constructor(
    private taskService: TaskService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
