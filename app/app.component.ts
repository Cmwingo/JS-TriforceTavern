import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Triforce Tavern</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}} {{currentKeg.brand}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
      new Keg('Lil Sumpin Ale', 'Lagunitas', 4, 8.7),
      new Keg('Hefeweissen', 'Blue Moon', 3, 6.3),
      new Keg('Cherry Wheat', 'Samuel Adams', 3.5, 5.6)
    ];
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}
}
