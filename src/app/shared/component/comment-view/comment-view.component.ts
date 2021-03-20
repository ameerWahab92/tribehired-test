import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {
  postId: any;
  dataComment: any;
  constructor(public service: CommentsService) { }

  ngOnInit(): void {
  }

  searchComment(id) {
    this.service.getComment(id).subscribe(item => {
      this.dataComment = item;
    })
  }
}
