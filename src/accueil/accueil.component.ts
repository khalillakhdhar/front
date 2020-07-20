import { UserService } from "./../services/user.service";
import { User } from "./../classes/users";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"],
})
export class AccueilComponent implements OnInit {
  test: string;
  users: User[];
  user: User;
  public search: any = "";
  query: string;
  constructor(private userservice: UserService) {
    //   this.test= 'je test' ;
  }

  ngOnInit() {
    if (localStorage.length === 0) {
      window.location.replace("auth");
    }
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().then((users) => (this.users = users));
  }
  onSelect(us: User): void {
    this.user = us;
    console.log(us.id);
  }
  delete(us): void {
    if (confirm("vous voulez supprimer ?"))
      this.userservice.delete(us.id).then(() => this.goBack());
  }
  goBack(): void {
    window.location.replace("accueil");
  }
}
