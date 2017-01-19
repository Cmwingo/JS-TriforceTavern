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
      <button (click)="sellButtonClicked(currentKeg)">Sell Pint</button>
      <p *ngIf="currentKeg.alcoholContent > 6.8" style="color:red">{{currentKeg.brand}} {{currentKeg.name}}</p> <p *ngIf="currentKeg.alcoholContent <= 6.8">{{currentKeg.brand}} {{currentKeg.name}}</p><p *ngIf="currentKeg.price > 5" style="background-color:rgb(129, 244, 106)">$ {{currentKeg.price}}</p><p *ngIf="currentKeg.price <= 5">$ {{currentKeg.price}}</p> <p>{{currentKeg.alcoholContent}}% ABV</p> <p>(Pints Left: {{currentKeg.pints}})</p>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
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
