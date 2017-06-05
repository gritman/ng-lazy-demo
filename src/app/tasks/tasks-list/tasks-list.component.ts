import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks = [
    {id: '1', title: 'Code Cleanup'},
    {id: '2', title: 'Review Code'},
    {id: '3', title: 'Build to Prod'}
  ];

  errorMessage:any = '';

  constructor(private router: Router) {
  }


  onSelect(task) {
    this.router.navigate(['/tasks', task.id]);
  }

  ngOnInit() {
  }

}
