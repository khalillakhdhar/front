import { AccueilComponent } from "./accueil/accueil.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UpComponent } from "./up/up.component";
import { FileSelectDirective, FileDropDirective } from "ng2-file-upload";
import { AuthComponent } from "./auth/auth.component";
import { InscrireComponent } from "./inscrire/inscrire.component";
import { ListusersComponent } from "./listusers/listusers.component";
import { AddusersComponent } from "./addusers/addusers.component";
import { MessagesComponent } from "./messages/messages.component";
import { SendmessageComponent } from "./sendmessage/sendmessage.component";
import { DocumentsComponent } from "./documents/documents.component";
import { CreatedocumentsComponent } from "./createdocuments/createdocuments.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SearchPipe } from "./pipes/search.pipe";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    AccueilComponent,
    AuthComponent,
    InscrireComponent,
    ListusersComponent,
    AddusersComponent,
    MessagesComponent,
    SendmessageComponent,
    DocumentsComponent,
    CreatedocumentsComponent,
    HeaderComponent,
    FooterComponent,
    FileSelectDirective,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
