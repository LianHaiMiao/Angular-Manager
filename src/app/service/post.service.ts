import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { POSTS } from '../../mock-data/mock-post';

@Injectable()

export class PostService {
    // 获取用户文章信息的服务,如果有api接口存在的情况下，应该使用HTTP
    getPosts(): Promise<Post[]> {
        return Promise.resolve(POSTS);
    }
}
