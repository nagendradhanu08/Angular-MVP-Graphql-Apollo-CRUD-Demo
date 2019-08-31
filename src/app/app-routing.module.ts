import { NgModule } from "@angular/core";
import { Routes, Router, RouterModule } from '@angular/router';

const route: Routes = [
    {
        path: '',
        loadChildren: './list/list.module#ListModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
