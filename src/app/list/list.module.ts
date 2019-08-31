import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { ListService } from './list.service';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { CourseDetailContainerComponent } from './course-detail-container/course-detail-container.component';
import { CourseDetailPresentationComponent } from './course-detail-container/course-detail-presentation/course-detail-presentation.component';
import { ModifyCourseContainerComponent } from './modify-course-container/modify-course-container.component';
import { ModifyCoursePresentationComponent } from './modify-course-container/modify-course-presentation/modify-course-presentation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    ListContainerComponent,
    ListPresentationComponent,
    CourseDetailContainerComponent,
    CourseDetailPresentationComponent,
    ModifyCourseContainerComponent,
    ModifyCoursePresentationComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ListService]
})
export class ListModule { }
