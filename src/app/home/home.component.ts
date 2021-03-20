import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsService } from '../service/comments.service';
import { CommentViewComponent } from '../shared/component/comment-view/comment-view.component';
import { IndividualDataComponent } from '../shared/component/individual-data/individual-data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['body', 'id', 'title', 'userId'];
  dataSource;
  allData;

  pageOfItems: Array<any>;
  page = 1;
  pageSize = 15;
  valueFilter: any;
  profileForm;

  constructor(
    public service: CommentsService,
    public dialog: MatDialog) { }

  async ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.allData = data;
    });

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  filterUser(user) {
    return user.userId == 1;
  }


  openDialog() {
    const dialogRef = this.dialog.open(IndividualDataComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openComment() {
    const dialogRef = this.dialog.open(CommentViewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
