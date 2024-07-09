import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  role:string = "";

  constructor(private userService:UserService, private bar: MatSnackBar,private route:Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.userService.register({name:this.name,email:this.email,password:this.password,role:this.role}).then(
      (response) => {
        console.log(response);
        if(response === "exist"){
          this.bar.open('User already Registered', 'Close', { duration: 3000,});
        }

        else if(response === "inserted" && this.role === "admin"){
          this.name = '';
          this.email = '';
          this.password = '';
          this.role='';
          this.bar.open('Registered as Admin', 'Close', {duration: 3000,});
        }
        
        else if(response === "inserted"  && this.role === "user"){
          this.name = '';
          this.email = '';
          this.password = '';
          this.role='';
          this.bar.open('Registered as User', 'Close', {duration: 3000,});
        }

        else{
          this.bar.open('Something went wrong', 'Close', {duration: 3000,})
        }
      }

    )
    this.route.navigate(['/login']);
  }

}
