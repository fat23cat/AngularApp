import { TestBed, inject } from '@angular/core/testing';

import { UserServiceMockService } from './user-service-mock.service';

describe('UserServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceMockService]
    });
  });

  it('should be created', inject([UserServiceMockService], (service: UserServiceMockService) => {
    expect(service).toBeTruthy();
  }));
});
