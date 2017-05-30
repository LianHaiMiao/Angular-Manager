import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AddPostComponent } from './add-post/add-post.component';


// 路由数组

const allRoutes: Routes = [
      { path: 'add/post', component: AddPostComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LeftNavComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(allRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
