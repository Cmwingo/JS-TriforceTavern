import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="keg-list">
    <div *ngFor="let currentKeg of childKegList" class="keg">
      <button (click)="sellButtonClicked(currentKeg)">Sell Pint</button>
      <p>{{currentKeg.name}} {{currentKeg.brand}} </p><p *ngIf="currentKeg.price > 5" style="color:red">$ {{currentKeg.price}}</p><p *ngIf="currentKeg.price <= 5">$ {{currentKeg.price}}</p> <p>{{currentKeg.alcoholContent}}% ABV (Pints Left: {{currentKeg.pints}})</p>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    </div>
  </div>
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
