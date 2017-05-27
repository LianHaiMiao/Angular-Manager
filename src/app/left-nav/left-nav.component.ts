import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  post_collapse: boolean;
  comment_collapse: boolean;
  user_collapse: boolean;
  role_collapse: boolean;
  author_collapse: boolean;
  stat_collapse: boolean;

  constructor() { }

  ngOnInit() {
    this.post_collapse = true;
    this.comment_collapse = true;
    this.user_collapse = true;
    this.role_collapse = true;
    this.author_collapse = true;
    this.stat_collapse = true;
  }

  postChange(): void {
    this.post_collapse = !this.post_collapse;
  }

  commentChange(): void {
    this.comment_collapse = !this.comment_collapse;
  }

  userChange(): void {
    this.user_collapse = !this.user_collapse;
  }

  roleChange(): void {
    this.role_collapse = !this.role_collapse;
  }

  authorChange(): void {
    this.author_collapse = !this.author_collapse;
  }

  statChange(): void {
    this.stat_collapse = !this.stat_collapse;
  }
}
