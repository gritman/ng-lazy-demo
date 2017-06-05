/**
 * Created by Edwin on 2017/6/5.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users-list/users-list.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {

}
