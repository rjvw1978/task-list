import { TestBed } from '@angular/core/testing';

import { TasksFirebaseService } from './tasks-firebase.service';

describe('TasksFirebaseService', () => {
  let service: TasksFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
