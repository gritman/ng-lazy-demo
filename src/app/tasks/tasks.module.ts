import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {TasksRoutingModule} from './tasks.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TaskDetailComponent, TasksListComponent]
})
export class TasksModule { }
