import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailContainerComponent } from './course-detail-container.component';

describe('CourseDetailContainerComponent', () => {
  let component: CourseDetailContainerComponent;
  let fixture: ComponentFixture<CourseDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
