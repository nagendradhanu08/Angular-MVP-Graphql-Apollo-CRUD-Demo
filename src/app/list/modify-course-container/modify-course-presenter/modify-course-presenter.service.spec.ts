import { TestBed } from '@angular/core/testing';

import { ModifyCoursePresenterService } from './modify-course-presenter.service';

describe('ModifyCoursePresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyCoursePresenterService = TestBed.get(ModifyCoursePresenterService);
    expect(service).toBeTruthy();
  });
});
