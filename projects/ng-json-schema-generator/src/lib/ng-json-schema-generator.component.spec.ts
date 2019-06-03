import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJsonSchemaGeneratorComponent } from './ng-json-schema-generator.component';

describe('NgJsonSchemaGeneratorComponent', () => {
  let component: NgJsonSchemaGeneratorComponent;
  let fixture: ComponentFixture<NgJsonSchemaGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgJsonSchemaGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgJsonSchemaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
