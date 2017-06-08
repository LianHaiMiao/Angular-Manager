import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  ckeditorContent: any;
  submitted: boolean;

  constructor() {
    this.ckeditorContent = `<p>My HTML</p>`;
    this.submitted = false;
  }


  ngOnInit() {

  }

  changeThePage(content: any) {
    console.log('触发changeThePage事件');
    console.log(content);
    this.submitted = !this.submitted;
  }


}
