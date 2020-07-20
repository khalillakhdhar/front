import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from './../classes/users';
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  user: User;
  submitted = false;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.submitted = false;
    this.user = new User();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  private save(): void {
    this.userservice.create(this.user);

  }
  goBack(): void {
    window.location.replace('accueil');
  }


}
