import { TestBed, inject } from '@angular/core/testing';

import { UserEventsService } from './user-events.service';

describe('UserEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEventsService]
    });
  });

  it('should be created', inject([UserEventsService], (service: UserEventsService) => {
    expect(service).toBeTruthy();
  }));
});
