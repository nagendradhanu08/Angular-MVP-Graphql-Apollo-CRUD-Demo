import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/types';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.sass']
})
export class ListContainerComponent implements OnInit {
  public courses$: Observable<Course[]>;
  constructor(
    private _listService: ListService) { }

  ngOnInit() {
    this.getTopicAndSubTopicQ();
  }
  private getTopicAndSubTopicQ() {
    this.courses$ = this._listService.getAllCourses();
  }

}
