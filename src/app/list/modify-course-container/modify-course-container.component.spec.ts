import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCourseContainerComponent } from './modify-course-container.component';

describe('ModifyCourseContainerComponent', () => {
  let component: ModifyCourseContainerComponent;
  let fixture: ComponentFixture<ModifyCourseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCourseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
