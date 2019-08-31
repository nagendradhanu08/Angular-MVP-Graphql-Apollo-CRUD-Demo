import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailPresentationComponent } from './course-detail-presentation.component';

describe('CourseDetailPresentationComponent', () => {
  let component: CourseDetailPresentationComponent;
  let fixture: ComponentFixture<CourseDetailPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
