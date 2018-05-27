import { TestBed, inject } from '@angular/core/testing';

import { FormConverterService } from './form-converter.service';

describe('FormConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormConverterService]
    });
  });

  it('should be created', inject([FormConverterService], (service: FormConverterService) => {
    expect(service).toBeTruthy();
  }));
});
