import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewKegComponent } from './new-keg.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  NewKegComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
