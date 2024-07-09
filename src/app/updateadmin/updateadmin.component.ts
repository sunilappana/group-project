import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  id:string = localStorage.getItem('userId')!;
  name: string = '';
  email: string = '';
  password: string = '';
  role:string = localStorage.getItem('role')!;


  constructor(private userService:UserService, private bar: MatSnackBar) { }

  ngOnInit(): void {
  }

  update(){
    this.userService.updateUser({id:this.id,name:this.name,email:this.email,password:this.password,role:this.role})
    .then(
      (response) => {
        console.log(response);
        if(response === "admin updated"){
          this.bar.open('Admin Updated Successfully', 'Close', {duration: 3000,});
        }

        else{
          this.bar.open('Something went wrong', 'Close', {duration: 3000,});
        }

      }
    )
  }

}
