import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
    leftcollapse = {
        post_collapse: true,
        comment_collapse: true,
        user_collapse: true,
        role_collapse: true,
        author_collapse: true,
        stat_collapse: true,
  };


    constructor() {
    }

    ngOnInit() {
        this.noOneShow();
    }

    hiddenChange(coll: string): void {
        this.noOneShow();
        this.leftcollapse[coll] = !this.leftcollapse[coll];
    }

    // 全都不展示
    noOneShow() {
        this.leftcollapse.post_collapse = true;
        this.leftcollapse.comment_collapse = true;
        this.leftcollapse.user_collapse = true;
        this.leftcollapse.role_collapse = true;
        this.leftcollapse.author_collapse = true;
        this.leftcollapse.stat_collapse = true;
    }

    // 找到相同的string.

}
