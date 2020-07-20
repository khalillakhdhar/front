import { Message } from './../classes/message';
import { UserService } from './../services/user.service';
import { User } from './../classes/users';
import { MessageService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private userservice: UserService, private messageservice: MessageService) {


   }
users: User[];
message: Message;
messages: Message[];
submitted = false;
ngOnInit() {
  if (localStorage.length === 0) {
        window.location.replace('auth');
        this.message = new Message();
        this.message.emeteur = localStorage.getItem('id');

  }
  console.log(localStorage.getItem('id'));
  this.getUsers();
  this.newMessage();
this.getMessages();
}
newMessage(): void {
  this.submitted = false;
  this.message = new Message();
  this.message.emeteur = localStorage.getItem('id');
  const   displayDate = new Date();
  console.log(displayDate.toLocaleDateString().toString());
  this.message.date = displayDate.toLocaleDateString().toString();
}

getUsers() {
  this.userservice.getUsers().then(users => this.users = users);
 }
getMessages() {
  this.messageservice.getMessages().then(messages => this.messages = messages);
 }

onSubmit() {
  this.submitted = true;
  this.messageservice.create(this.message);
 // console.log(this.message);


}
private save(): void {

}
goBack(): void {
  window.location.replace('message');
}

  }


