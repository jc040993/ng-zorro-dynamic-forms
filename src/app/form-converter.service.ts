import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable()
export class FormConverterService {

  constructor() { }

  toFormGroup(formModel) {
    let formGroup = {};
    formModel.forEach(field => {
      formGroup[field.key] = this.getFormField(field);
    });
    return new FormGroup(formGroup);
  }

  getFormField(field: any) {
    switch (field.type) {
      case "checkbox":
        return this.toFormGroupFromArr(field.options);
      case "array":
        return new FormArray(field.array.map(el => {
          return this.toFormGroupFromArr(el);
        }));
      case "object":
        return this.toFormGroupFromArr(field.sub);
      default:
        return new FormControl(field.defaultValue);
    }
  }

  toFormGroupFromArr(arr) {
    return new FormGroup(arr.reduce((acc, cur) => {
      return this.appendFieldFormControlToObject(cur, acc);
    }, {}));
  }

  appendFieldFormControlToObject(field, obj) {
    obj[field.key] = new FormControl(field.defaultValue);
    return obj;
  }
}
