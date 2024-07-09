import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {

  constructor(private adminService:AdminService,private bar: MatSnackBar) { }

  displayedColumns: string[] = ["id", "name", "email", "role", "deleteUsers"];

  users: any = [];

  ngOnInit(): void {
    this.userList();
  }

  userList():void{

    this.adminService.getUsers().then(
      (response) => {
        console.log(response);
        this.users = response;
    
      }
    )

}

delete(id:any){

  this.adminService.deleteUser({id:id}).then(
    (response) => {
      if(response === "ok"){
        console.log(response)
        this.bar.open('User Deleted Successfully', 'Close', {duration: 3000,});
        window.location.reload();
      }
    }
  )
}

}
