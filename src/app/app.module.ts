import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';

import { RouterModule } from '@angular/router';
import { AlimentCalculatorComponent } from './aliment-calculator/aliment-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AlimentListComponent,
    AlimentCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AlimentCalculatorComponent },
      { path: 'aliments', component: AlimentListComponent } 
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
