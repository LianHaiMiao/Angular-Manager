import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'; 

import { CommonModule } from '@angular/common';
// BrowserAnimationsModule is required
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './model/app-routing.module';

// 第三方组件
import { CKEditorModule } from 'ng2-ckeditor';
import { ToastrModule } from 'ngx-toastr';

// 自己的组件
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ManagerTodoComponent } from './manager-todo/manager-todo.component';
import { UserAddComponent } from './user-add/user-add.component';



@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    AddPostComponent,
    ManagerPostComponent,
    EditPostComponent,
    ManagerTodoComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CKEditorModule,
    // 使用formControlName必需
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
