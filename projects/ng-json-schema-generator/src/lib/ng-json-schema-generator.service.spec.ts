import { TestBed } from '@angular/core/testing';

import { NgJsonSchemaGeneratorService } from './ng-json-schema-generator.service';

describe('NgJsonSchemaGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgJsonSchemaGeneratorService = TestBed.get(NgJsonSchemaGeneratorService);
    expect(service).toBeTruthy();
  });
});
