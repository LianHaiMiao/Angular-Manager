import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../add-post/add-post.component';
import { ManagerPostComponent } from '../manager-post/manager-post.component';

const appRoutes: Routes = [
    { path: 'add/posts', component: AddPostComponent },
    { path: 'manager/posts', component: ManagerPostComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
