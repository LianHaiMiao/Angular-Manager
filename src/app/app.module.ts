import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './model/app-routing.module';

import { UserFormComponent } from './user-form/user-form.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LeftNavComponent,
    AddPostComponent,
    ManagerPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
