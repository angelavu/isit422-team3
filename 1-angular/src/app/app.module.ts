import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { TimerComponent } from './timer/timer.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    CalculateComponent,
    PhrasesComponent,
    TimerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
