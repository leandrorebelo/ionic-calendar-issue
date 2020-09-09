import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalendarComponent as IonicCalendar } from 'ionic2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public eventSource = [];
  public viewTitle: string;
  public dateSelected: Date;

  public calendar;
  @ViewChild(IonicCalendar) myCal: IonicCalendar;

  private pipe: DatePipe;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private popoverController: PopoverController,
  ) {
    this.pipe = new DatePipe(locale);
  }

  ngOnInit() {
    this.calendar = {
      mode: 'month',
      currentDate: new Date(),
    };

    this.dateSelected = this.calendar.currentDate;
  }

  onDismiss() {
    this.popoverController.dismiss();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  next() {
    console.log(this.myCal);
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  getDay() {
    return this.pipe.transform(this.dateSelected, 'EE').replace('.', ',');
  }

  getMonth() {
    return this.pipe.transform(this.dateSelected, 'MMM').replace('.', '');
  }

  onTimeSelected(ev) {
    this.dateSelected = ev.selectedTime;

    console.log(
      `Selected time: ${ev.selectedTime}`
    );
  }
}
