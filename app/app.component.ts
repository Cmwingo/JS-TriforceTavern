import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Triforce Tavern</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (sellClickSender)="sellPint($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg: Keg = null;
  masterKegList: Keg[] = [
      new Keg('Lil Sumpin Ale', 'Lagunitas', 6.00, 8.7),
      new Keg('Hefeweissen', 'Blue Moon', 3.00, 6.3),
      new Keg('Cherry Wheat', 'Samuel Adams', 3.50, 5.6)
    ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sellPint(clickedKeg) {
    clickedKeg.pints -= 1;
  }
}
