import { TestBed } from '@angular/core/testing';

import { TestUiLibService } from './test-ui-lib-2.service';

describe('TestUiLibService', () => {
  let service: TestUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
