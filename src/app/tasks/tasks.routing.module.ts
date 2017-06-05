/**
 * Created by Edwin on 2017/6/5.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        children: [
          {
            path: '',
            component: TasksListComponent
          },
          {
            path: ':id',
            component: TaskDetailComponent,
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class TasksRoutingModule {
}
