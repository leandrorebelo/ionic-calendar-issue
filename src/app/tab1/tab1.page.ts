import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private popoverController: PopoverController) {}

  async onOpenCalendar() {
    const popover = await this.popoverController.create({
      mode: 'md',
      animated: false,
      cssClass: 'pop-calendar',
      backdropDismiss: false,
      component: CalendarComponent,
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log(data);
  }

}
