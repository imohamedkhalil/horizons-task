import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListingComponent } from './modules/task/task-listing/task-listing.component';
import { AddTaskComponent } from './modules/task/add-task/add-task.component';
import { EditTaskComponent } from 'src/app/modules/task/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListingComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tasks', component: TaskListingComponent },
      { path: 'tasks/add', component: AddTaskComponent },
      { path: 'tasks/edit/:id', component: EditTaskComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
