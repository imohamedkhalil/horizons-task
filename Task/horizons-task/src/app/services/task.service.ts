import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ITask } from '../interfaces/ITask';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: any;

  url = "http://localhost:59034/api/tasks";

  getTasks() {
  this.http.get<ITask[]>(this.url).subscribe(res => { this.tasks = res });
    return this.http.get<ITask[]>(this.url);
  }

  addTask(form): Observable<ITask> {
    var task: ITask;
    task = form.value;
    console.log(task);
    return this.http.post<ITask>(this.url, task);
  }

  public getTask(id) {
    return this.tasks.find(task => task.id == id);
}

  deleteTask(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editTask(task): Observable<ITask> {
    const url = `${this.url}/${task.id}`;
    console.log(url);
    return this.http.put(url, task);
  }

  constructor(private http: HttpClient) {
    this.getTasks();
  }

}
