import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/types';
import { FormGroup } from '@angular/forms';
import { ModifyCoursePresenterService } from '../modify-course-presenter/modify-course-presenter.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-modify-course-presentation',
  templateUrl: './modify-course-presentation.component.html',
  styleUrls: ['./modify-course-presentation.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ModifyCoursePresenterService],
})
export class ModifyCoursePresentationComponent implements OnInit {
  @Output() public updateCourseDetail = new EventEmitter();
  public form: FormGroup;
  public coursDetail: Course;
  public desctroy$: Subject<boolean>;
  @Input() public set course(coursDetail: Course) {
    if (coursDetail) {
      this.coursDetail = coursDetail;
    } else {
      this.coursDetail = new Course();
    }
    this.setForm(this.coursDetail);
  }
  @Input() formType: string;
  constructor(
    private _modifyCoursePresenter: ModifyCoursePresenterService
  ) {
    this.desctroy$ = new Subject();
    this._modifyCoursePresenter.form$.pipe(takeUntil(this.desctroy$)).subscribe((form: FormGroup) => {
      this.form = form;
    });
  }

  ngOnInit() {

  }

  submit() {
    if (this.formType === 'Edit') {
      this.updateCourseDetail.emit(this.form.getRawValue());
    }
  }
  private setForm(course: Course) {
    this._modifyCoursePresenter.buildForm(course);
  }

}
