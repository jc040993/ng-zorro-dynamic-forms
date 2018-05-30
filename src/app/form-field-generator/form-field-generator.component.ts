import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ObjectPipe } from '../object.pipe';
import { FormConverterService } from '../form-converter.service';

@Component({
  selector: 'app-form-field-generator',
  templateUrl: './form-field-generator.component.html',
  styleUrls: ['./form-field-generator.component.css']
})
export class FormFieldGeneratorComponent implements OnInit {
  
  @ViewChild('input') input: TemplateRef<any>;
  @ViewChild('textarea') textarea: TemplateRef<any>;
  @ViewChild('inputWithAutoComplete') inputWithAutoComplete: TemplateRef<any>;
  @ViewChild('textareaWithAutoComplete') textareaWithAutoComplete: TemplateRef<any>;
  @ViewChild('number') number: TemplateRef<any>;
  @ViewChild('dropdown') dropdown: TemplateRef<any>;
  @ViewChild('checkbox') checkbox: TemplateRef<any>;
  @ViewChild('radio') radio: TemplateRef<any>;
  @ViewChild('date') date: TemplateRef<any>;
  @ViewChild('object') object: TemplateRef<any>;
  @Input() abstractControl: AbstractControl;
  @Input() field: any;
  private ctx: {};
  constructor(private formConverterService: FormConverterService) { }

  ngOnInit() {
    // console.log(this.field.key);
    // console.log(this.abstractControl);
  }

  getTemplateOutlet(type) {
    switch (type) {
      case "input":
        return this.input;
      case "textarea":
        return this.textarea;
      case "inputWithAutoComplete":
        return this.inputWithAutoComplete;
      case "textareaWithAutoComplete":
        return this.textareaWithAutoComplete;
      case "number":
        return this.number;
      case "dropdown":
        return this.dropdown;
      case "checkbox":
        return this.checkbox;
      case "radio":
        return this.radio;
      case "date":
        return this.date;
      case "object":
        return this.object;

      default:
        break;
    }
  }

  getContext(f, i) {
    if(this.field.type ===  "array")
      return {'field': f, 'control': (this.abstractControl as FormArray).at(i).get(f.key)};
    else
      return {'field': f, 'control': this.abstractControl};
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }

    this.field.array.push(this.field.default);
    (this.abstractControl as FormArray).push(this.formConverterService.toFormGroupFromArr(this.field.default));
  }


  removeField(i, e: MouseEvent): void {
    e.preventDefault();
    
    if (this.field.array.length > 1) {
      this.field.array.splice(i, 1);
      (this.abstractControl as FormArray).removeAt(i);
    }
  }

}
