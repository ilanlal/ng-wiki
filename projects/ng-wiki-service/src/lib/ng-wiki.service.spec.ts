import { TestBed } from '@angular/core/testing';

import { WikiClientService } from './ng-wiki.service';

describe('NgWikiServiceService', () => {
  let service: WikiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
