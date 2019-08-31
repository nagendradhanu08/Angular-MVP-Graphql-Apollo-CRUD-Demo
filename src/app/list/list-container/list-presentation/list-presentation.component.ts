import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/types';


@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.sass']
})
export class ListPresentationComponent implements OnInit {

  @Input() public courses: Course[];

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  public goToDetail(id): void {
    this._route.navigate(['/course-detail', id]);
  }

  public goToEdit(id): void {
    this._route.navigate(['/modify-course', id]);
  }

}
