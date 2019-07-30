/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CausalHelperService } from './causal-helper.service';

describe('Service: CausalHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CausalHelperService]
    });
  });

  it('should ...', inject([CausalHelperService], (service: CausalHelperService) => {
    expect(service).toBeTruthy();
  }));
});
