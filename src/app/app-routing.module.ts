import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { UpComponent } from './up/up.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AuthComponent } from './auth/auth.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddusersComponent } from './addusers/addusers.component';
import { MessagesComponent } from './messages/messages.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { DocumentsComponent } from './documents/documents.component';
import { CreatedocumentsComponent } from './createdocuments/createdocuments.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'message', component: SendmessageComponent},
  {path: 'listuser', component: ListusersComponent},
  {path: 'folder', component: DocumentsComponent},
  {path: 'file', component: UpComponent},
  {path: 'ins', component: AddusersComponent},
  {path: 'auth', component: AuthComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
