import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifdirectiveComponent } from './ngifdirective/ngifdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    InterpolationComponent,
    TemplatereferencevariablesComponent,
    TwowaybindingComponent,
    NgifdirectiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
