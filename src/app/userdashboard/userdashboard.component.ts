import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor() { }

  user:string='';

  ngOnInit(): void {
    this.user = localStorage.getItem('name')!;
  }

}
