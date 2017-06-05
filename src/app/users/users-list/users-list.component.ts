import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Roe'},
    {id: '3', name: 'John Smith'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
