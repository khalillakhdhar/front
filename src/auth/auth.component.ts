import { UserService } from "./../services/user.service";
import { User } from "./../classes/users";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  users: User[];
  user: User;
  submitted = false;

  constructor(private userservice: UserService) {}
  ngOnInit() {
    localStorage.clear();
    this.user = new User();
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().then((users) => (this.users = users));
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private save(): void {
    this.getUsers();
    localStorage.setItem("email", this.user.email);
    for (const u of this.users) {
      if (this.user.email === u.email && this.user.mdp === u.mdp) {
        localStorage.setItem("id", String(u.id));
        window.location.replace("accueil");
      }
    }
    console.log(localStorage.getItem("email"));
  }
}
