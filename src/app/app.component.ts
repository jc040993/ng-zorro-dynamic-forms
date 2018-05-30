import { Component } from '@angular/core';
import { FormModel } from './form-model';
import { FormGroup } from '@angular/forms';
import { FormConverterService } from './form-converter.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fields: any[];
  group: FormGroup;
  constructor(private formConverter: FormConverterService) {
    this.fields = FormModel.form;
    this.group = formConverter.toFormGroup(this.fields);
  }
}
