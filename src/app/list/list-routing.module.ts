import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { CourseDetailContainerComponent } from './course-detail-container/course-detail-container.component';
import { ModifyCourseContainerComponent } from './modify-course-container/modify-course-container.component';
const route: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [
            {
                path: '',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: ListContainerComponent
            },
            {
                path: 'course-detail/:coursId',
                component: CourseDetailContainerComponent
            },
            {
                path: 'modify-course/:coursId',
                component: ModifyCourseContainerComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    declarations: [],
    exports: [RouterModule]
})
export class ListRoutingModule { }