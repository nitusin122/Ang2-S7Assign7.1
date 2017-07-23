import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person-app.component';
import { PersonDetailsComponent } from './personDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PersonComponent]
})
export class AppModule { }
