import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import * as moment from 'moment';

import * as _moment from 'moment';

// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM YYYY'
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMM YYYY'
  }
};

@Component({
  selector: 'app-date-picker2',
  templateUrl: './date-picker2.component.html',
  styleUrls: ['./date-picker2.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePicker2Component),
      multi: true
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class DatePicker2Component implements ControlValueAccessor {
  constructor() {}

  /**
   * Set the value of the date set by user, notice the underscore infront of the datevalue
   */

  @Input() _dateValue: string = null;

  /**
   * Placeholder value for the material control input
   */
  @Input() public placeholder: string = null;

  @Input() public minDate = null;

  /**
   * The date format to use with default format but allowing you to pass a custom date format
   */
  @Input() private format = 'YYYY/MM/DD HH:mm:ss';

  get dateValue() {
    return moment(this._dateValue, this.format);
  }

  set dateValue(val) {
    this._dateValue = moment(val).format(this.format);
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateValue = moment(event.value, this.format);
  }

  displayDateValue(date) {
    console.log(moment(date, this.format));
    return moment(date, this.format);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = moment(value, this.format);
    }
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
