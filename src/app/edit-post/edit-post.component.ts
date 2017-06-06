import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  content: any;

  constructor() {
    this.content = '<p>Hello <strong>World !</strong></p>';
  }

  ngOnInit() {

  }



}
