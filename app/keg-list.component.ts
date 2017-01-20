import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="lowKegs">Low Kegs</option>
  </select>
  <div class="keg-list">
    <div *ngFor="let currentKeg of childKegList | fullness:filterByFullness" class="keg">
      <p class="keg-list-title high-alcohol" *ngIf="currentKeg.alcoholContent > 6.8"> {{currentKeg.brand}} {{currentKeg.name}}</p>
      <p class="keg-list-title" *ngIf="currentKeg.alcoholContent <= 6.8">{{currentKeg.brand}} {{currentKeg.name}}</p>
      <p>{{currentKeg.alcoholContent}}% ABV</p>
      <p *ngIf="currentKeg.price > 5" style="font-weight:bold"> {{currentKeg.price | currency:'USD':true}}</p>
      <p *ngIf="currentKeg.price <= 5">{{currentKeg.price | currency:'USD':true}}</p>
      <button class="sell-button" (click)="sellButtonClicked(currentKeg)">Sell Pint</button>
      <p>(Pints Left: {{currentKeg.pints}})</p>
      <button class="edit-button"(click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellClickSender = new EventEmitter();

  filterByFullness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByFullness = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellButtonClicked(kegToSellFrom: Keg) {
    this.sellClickSender.emit(kegToSellFrom);
  }
}
