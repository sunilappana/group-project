import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

 
  constructor(private admin: AdminService) {}

  data: any = [];

  ngOnInit(): void {
    this.getData();
  }

 
  getData(): void {
    this.admin.getQuestions().then((res) => (this.data = res));
  }

  delete(id: Number): void {
    this.admin.delete(id).then((res) => {
      if (res === 'ok') {
        this.getData();
      }
    });
  }

  approve(id: Number): void {
    this.admin.approve(id).then((res) => {
      if (res === 'ok') {
        this.getData();
      }
    });
  }


}
