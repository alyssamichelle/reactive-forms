import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';



@NgModule({
  declarations: [
    AppComponent,
    CoffeeFormComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropDownsModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
