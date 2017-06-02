import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-manager-post',
  templateUrl: './manager-post.component.html',
  styleUrls: ['./manager-post.component.css'],
  providers: [PostService]
})
export class ManagerPostComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostService) {
    }


    ngOnInit() {
      this.postService.getPosts().then(posts => this.posts = posts);
    }

}
