import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageData: any = [];
  recivedMessageData: any = [];
  currentUser: string = localStorage.getItem('name')!;
  currentUserRole:String = localStorage.getItem('role')!;
  to: string = '';
  message: string = '';
  uniqueUsers: any = [];

  constructor(
    private service: MessageService,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.getUniqueUsers();
    this.getMessages(this.currentUser, this.to);
    this.getRecivedMessages(this.currentUser, this.to);
  }

  sendMessage(): void {
    let temp = {
      fromUser: this.currentUser,
      toUser: this.to,
      message: this.message,
    };

    this.service.send(temp).then((res) => {
      if (res === 'ok') {
        this.message = '';
        this.getMessages(this.currentUser, this.to);
      }
    });
  }

  getMessages(from: string, to: string): void {
    this.service.getMessages(from, to).then((res) => {
      this.messageData = res;
    });
  }

  getUniqueUsers(): void {
 
    this.userService.getUnique().then((res) => (this.uniqueUsers = res));
  
  }

  changeMessages(user: string): void {
    this.to = user;
    this.getMessages(this.currentUser, this.to);
    this.getRecivedMessages(this.currentUser, this.to);
  }

  getRecivedMessages(from: string, to: string): void {
    this.service.getMessages(to, from).then((res) => {
      this.recivedMessageData = res;
    });
  }

}
