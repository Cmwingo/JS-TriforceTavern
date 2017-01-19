import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">
      <button (click)="sellButtonClicked(currentKeg)">Sell Pint</button>
      {{currentKeg.name}} {{currentKeg.brand}} -- $ {{currentKeg.price}} | {{currentKeg.alcoholContent}}% ABV (Pints Left: {{currentKeg.pints}})
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellClickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellButtonClicked(kegToSellFrom: Keg) {
    this.sellClickSender.emit(kegToSellFrom);
  }
}
