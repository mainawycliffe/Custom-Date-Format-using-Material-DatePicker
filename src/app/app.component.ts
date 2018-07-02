import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public firstDate = moment();
  public secondDate = moment();
  public thirdDate = moment();
  public fourthDate = moment();
  public fifthDate = moment();

  ngOnInit() {}
}
