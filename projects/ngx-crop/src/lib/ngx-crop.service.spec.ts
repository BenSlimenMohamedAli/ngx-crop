import { TestBed } from '@angular/core/testing';

import { NgxCropService } from './ngx-crop.service';

describe('NgxCropService', () => {
  let service: NgxCropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
