import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { FormFieldGeneratorComponent } from './form-field-generator/form-field-generator.component';
import { FormConverterService } from './form-converter.service';
import { ObjectPipe } from './object.pipe';
registerLocaleData(en);
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [AppComponent, FormGeneratorComponent, FormFieldGeneratorComponent, ObjectPipe],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }, FormConverterService]
})
export class AppModule { }

