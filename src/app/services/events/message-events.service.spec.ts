import { TestBed, inject } from '@angular/core/testing';

import { MessageEventsService } from './message-events.service';

describe('MessageEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageEventsService]
    });
  });

  it('should be created', inject([MessageEventsService], (service: MessageEventsService) => {
    expect(service).toBeTruthy();
  }));
});
