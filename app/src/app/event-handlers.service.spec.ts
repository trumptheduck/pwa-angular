import { TestBed } from '@angular/core/testing';

import { Events } from './event-handlers.service';

describe('EventHandlersService', () => {
  let service: Events;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Events);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
