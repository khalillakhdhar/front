import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { DocumentService } from "../services/document.service";
import { Files } from "../classes/files";

@Component({
  selector: "app-up",
  templateUrl: "./up.component.html",
  styleUrls: ["./up.component.css"],
})
export class UpComponent implements OnInit {
  test: string;
  files: Files[];
  public search: any = "";
  query: string;
  public uploader: FileUploader = new FileUploader({
    url: "http://localhost:3001/upload",
  });

  constructor(private fileservice: DocumentService) {
    //   this.test= 'je test' ;
  }

  ngOnInit() {
    if (localStorage.length === 0) {
      window.location.replace("auth");
    }
    this.getUsers();
  }
  getUsers() {
    this.fileservice.getFiles().then((files) => (this.files = files));
  }
}
