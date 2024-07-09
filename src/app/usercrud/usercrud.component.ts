import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css']
})
export class UsercrudComponent implements OnInit {

  constructor(private userService:UserService,private bar: MatSnackBar) { }

  id:string = localStorage.getItem('userId')!;
  name: string = '';
  email: string = '';
  password: string = '';
  role:string = localStorage.getItem('role')!;

  ngOnInit(): void {
  }

  update(){
    this.userService.updateUser({id:this.id,name:this.name,email:this.email,password:this.password,role:this.role})
    .then(
      (response) => {
        console.log(response);
        if(response === "updated"){
          this.bar.open('User Updated Successfully', 'Close', {duration: 3000,});
        }

        else{
          this.bar.open('Something went wrong', 'Close', {duration: 3000,});
        }

      }
    )
  }

}
