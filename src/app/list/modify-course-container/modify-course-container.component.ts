import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/types';
import { Observable } from 'rxjs';
import { ListService } from '../list.service';

@Component({
  selector: 'app-modify-course-container',
  templateUrl: './modify-course-container.component.html',
  styleUrls: ['./modify-course-container.component.sass']
})
export class ModifyCourseContainerComponent implements OnInit {

  public course$: Observable<Course>;
  public courseId: number;
  public formType: string = 'Add';
  constructor(
    private _route: ActivatedRoute,
    private _listService: ListService,
    private _router: Router) { }

  ngOnInit() {
    this.courseId = +this._route.snapshot.params.coursId;
    if (this.courseId) {
      this.formType = "Edit";
      this.getCourseDetail();
    }
  }

  private getCourseDetail(): void {
    const variable: any = {
      "courseID": this.courseId
    }
    this.course$ = this._listService.getCoursesById(variable);
  }

  public updateCourseDetail(course: Course): void {
    const courseData = {
      "id": this.courseId,
      "topic": course.topic,
      "title": course.title,
      "author": course.author,
      "description": course.description
    }
    this._listService.updateCourse(courseData).subscribe(response => {
      if (response) {
        this._router.navigate(['/']);
      }
    });
  }
}
