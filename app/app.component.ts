import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Triforce Tavern</h1>
    <ul>
      <li *ngFor="let currentKeg of masterKegList">{{currentKeg.name}} {{currentKeg.brand}} -- $ {{currentKeg.price}} | {{currentKeg.alcoholContent}}% ABV</li>
    </ul>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
      new Keg('Lil Sumpin Ale', 'Lagunitas', 4.00, 8.7),
      new Keg('Hefeweissen', 'Blue Moon', 3.00, 6.3),
      new Keg('Cherry Wheat', 'Samuel Adams', 3.50, 5.6)
    ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
