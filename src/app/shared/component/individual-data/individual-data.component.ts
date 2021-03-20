import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/service/comments.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-individual-data',
  templateUrl: './individual-data.component.html',
  styleUrls: ['./individual-data.component.scss']
})
export class IndividualDataComponent implements OnInit {
  postId;
  data;
  constructor(public service: CommentsService) { }

  ngOnInit(): void {
  }

  searchIndi(id) {
    this.service.getIndividual(id).subscribe(item => {
      this.data = item;
    })

  }
}
