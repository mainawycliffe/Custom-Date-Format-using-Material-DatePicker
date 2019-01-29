import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import { DatePickerComponent } from './utility/date-picker/date-picker.component';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatCardModule
} from '@angular/material';
import { DatePicker2Component } from './utility/date-picker2/date-picker2.component';

@NgModule({
  declarations: [AppComponent, DatePickerComponent, DatePicker2Component],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
