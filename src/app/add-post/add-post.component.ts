import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Post } from '../model/post.model';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
    newPost = new Post('', '');
    constructor(private router: Router) { }

    ngOnInit() {
    }

    // 提交新文章
    onSubmit() {
        this.router.navigate(['/manager/posts']);
    }

    // 重置文章
    restPost() {
      this.newPost = new Post('', '');
    }


}
