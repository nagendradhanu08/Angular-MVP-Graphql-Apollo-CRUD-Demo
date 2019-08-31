import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { Course } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class ModifyCoursePresenterService {
  public form$: Observable<FormGroup>;
  public form: Subject<FormGroup> = new Subject();
  constructor(private fb: FormBuilder) {
    this.form$ = this.form.asObservable();
  }

  public buildForm(course: Course): void {
    const form = this.fb.group({
      title: [course.title, [Validators.required]],
      author: [course.author, [Validators.required]],
      description: [course.description, [Validators.required]],
      topic: [course.topic, [Validators.required]]
    });
    this.form.next(form);
  }
}
