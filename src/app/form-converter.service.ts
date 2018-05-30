import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class FormConverterService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(formModel) {
    let temp1 = this.fb.group(formModel.reduce((acc, cur) => {
      switch (cur.type) {
        case "checkbox":
          acc[cur.key] = this.toFormGroup(cur.options);
          break;
        case "array":
        
          break;
        case "object":
        
          break;
        case "dynamic":
        
          break;
      
        default:
          acc[cur.key] = cur.defaultValue;
          break;
      }

      return acc;
    }, {}));

    console.log(temp1);
    



    let formGroup = {};
    formModel.forEach(field => {
      formGroup[field.key] = this.getFormField(field);
    });

    let temp2 = new FormGroup(formGroup);
    console.log(temp2);

    if(temp1 === temp2)
      console.log("!!!!!!!");

    return temp2;
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
