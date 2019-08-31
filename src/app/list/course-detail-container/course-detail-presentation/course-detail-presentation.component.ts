import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/types';

@Component({
  selector: 'app-course-detail-presentation',
  templateUrl: './course-detail-presentation.component.html',
  styleUrls: ['./course-detail-presentation.component.sass']
})
export class CourseDetailPresentationComponent implements OnInit {
  public coursDetail: Course;
  @Input() public set course(coursDetail: Course) {
    if (coursDetail) {
      this.coursDetail = coursDetail;
    } else {
      this.coursDetail = new Course();
    }
  }
  constructor(private _router: Router) {
  }

  ngOnInit() {
  }
  public goBack(): void {
    this._router.navigate(['/']);
  }
}
