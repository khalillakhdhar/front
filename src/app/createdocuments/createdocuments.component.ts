import { Files } from './../classes/files';
import { ThrowStmt } from '@angular/compiler';

import { DocumentService } from './../services/document.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-createdocuments',
  templateUrl: './createdocuments.component.html',
  styleUrls: ['./createdocuments.component.css']
})
export class CreatedocumentsComponent implements OnInit {
file: Files;
submitted = false;
constructor(private documentService: DocumentService) {


}
ngOnInit() {
  if (localStorage.length === 0) {
        window.location.replace('auth');
  }
        this.file = new Files();
        this.file.createur = localStorage.getItem('id');


  console.log(localStorage.getItem('id'));

}
newFile(): void {
  this.submitted = false;
  this.file = new Files();
  this.file.createur = localStorage.getItem('id');

}



onSubmit() {
  this.submitted = true;
  this.save();
  console.log(this.file);
  window.location.replace('file');


}
private save(): void {
  this.documentService.create(this.file);
}
goBack(): void {
  window.location.replace('folder');
}
}
