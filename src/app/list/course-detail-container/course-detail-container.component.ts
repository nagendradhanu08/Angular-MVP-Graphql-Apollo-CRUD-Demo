import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/types';
import { ListService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail-container',
  templateUrl: './course-detail-container.component.html',
  styleUrls: ['./course-detail-container.component.sass']
})
export class CourseDetailContainerComponent implements OnInit {
  public course$: Observable<Course>;
  
  constructor(
    private _listService: ListService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    const cid = this._route.snapshot.params['coursId'];
    this.getCourseDetail(+cid);
  }

  private getCourseDetail(cid: number): void {
    const variable: any = {
      "courseID": cid
    }
    this.course$ = this._listService.getCoursesById(variable);
  }
}
