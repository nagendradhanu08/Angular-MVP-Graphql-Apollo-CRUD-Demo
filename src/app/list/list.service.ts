import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import * as  Type from '../types';
import * as Query from '../global-query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  courses: Observable<Type.Course[]>;
  course: Observable<Type.Course>;

  constructor(private apollo: Apollo) { }

  public getCoursesByTopic(topic: any) {
    this.courses = this.apollo.watchQuery<Type.Query>({
      query: Query.CoursesByTopic,
      variables: topic,
    })
      .valueChanges.pipe(
        map(result => result.data.courses));

    return this.courses;
  }

  public getCoursesById(id: any) {
    this.course = this.apollo.watchQuery<Type.getCourseById>({
      query: Query.CoursesById,
      variables: id
    })
      .valueChanges.pipe(
        map(result => result.data.getCourseById));
    return this.course;
  }

  public updateCourse(coursedata: Type.Course) {
    this.course = this.apollo.watchQuery<Type.updateCourse>({
      query: Query.UpdateCourse,
      variables: coursedata
    })
      .valueChanges.pipe(
        map(result => result.data.updateCourse));
    return this.course;
  }

  public getAllCourses() {
    this.courses = this.apollo.watchQuery<any>({
      query: Query.getAllCourses,
    })
      .valueChanges.pipe(
        map(result => {
          console.log(result);
          return result.data.courses
        }));

    return this.courses;
  }
}
