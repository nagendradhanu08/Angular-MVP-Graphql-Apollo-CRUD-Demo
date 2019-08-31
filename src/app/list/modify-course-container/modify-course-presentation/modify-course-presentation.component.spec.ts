import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCoursePresentationComponent } from './modify-course-presentation.component';

describe('ModifyCoursePresentationComponent', () => {
  let component: ModifyCoursePresentationComponent;
  let fixture: ComponentFixture<ModifyCoursePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCoursePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCoursePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
