import { TestBed } from '@angular/core/testing';

import {ApideepskinService} from './apideepskin.service';

describe('ApideepskinService', () => {
  let service: ApideepskinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApideepskinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
