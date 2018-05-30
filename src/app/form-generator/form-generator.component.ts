import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() fields: any[];
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
