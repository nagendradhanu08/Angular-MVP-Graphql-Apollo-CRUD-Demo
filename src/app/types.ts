export class Course {
    id: number = 0;
    title: string = '';
    author: string = '';
    description: string = '';
    topic: string = '';
}
export interface Query {
    courses: Course[];
}
export interface getCourseById {
    getCourseById: Course;
}
export interface updateCourse {
    updateCourse: Course;
}