import { TestBed } from '@angular/core/testing';

import { FavIconServiceService } from './fav-icon-service.service';

describe('FavIconServiceService', () => {
  let service: FavIconServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavIconServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
