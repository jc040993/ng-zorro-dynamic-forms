import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldGeneratorComponent } from './form-field-generator.component';

describe('FormFieldGeneratorComponent', () => {
  let component: FormFieldGeneratorComponent;
  let fixture: ComponentFixture<FormFieldGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
