import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  configUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAll() {
    //https://jsonplaceholder.typicode.com/posts
    return this.http.get(`${this.configUrl}/posts`);
  }

  getIndividual(postId) {
    //https://jsonplaceholder.typicode.com/posts/{post_id}
    return this.http.get(`${this.configUrl}/posts/${postId}`).pipe(map(res => {
      return res;
    }))
  }

  getComment(postId) {
    // https://jsonplaceholder.typicode.com/comments?postId=1
    return this.http.get(`${this.configUrl}/comments/?postId=${postId}`);

  }
}
