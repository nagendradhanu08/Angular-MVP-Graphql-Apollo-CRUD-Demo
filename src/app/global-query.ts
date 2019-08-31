'use strict';

import gql from 'graphql-tag';

export const courseFields = gql`
  fragment courseFields on Course {
    id
    title
    author
    description
    topic
  }
`;

export const getAllCourses = gql`
{
  courses {
    ...courseFields
  }
}
${ courseFields}
`;

export const CoursesByTopic = gql`
query getCoursesByTopic($courseTopic: String!) {
  getCoursesByTopic(topic: $courseTopic) {
      ...courseFields
    }
  }
  ${courseFields}
  `;

export const CoursesById = gql`
query getCourseById($courseID: Int!) {
  getCourseById(id: $courseID) {
     ...courseFields
    }
  }
  ${courseFields}
  `;

export const UpdateCourse = gql`
query updateCourse($id: Int!, $topic: String!, $title: String!, $author: String!, $description: String!) {
  updateCourse(id: $id, topic: $topic, title: $title, author: $author, description: $description) {
    ...courseFields
  }
}
${courseFields}
`;

export const AddCourse = gql`
  mutation addCourseTopic($id: Int!, $topic: String!) {
    addCourseTopic(id: $id, topic: $topic) {
      ... courseFields
    }
  }
  ${courseFields}
  `;