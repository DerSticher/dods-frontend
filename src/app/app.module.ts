import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule, ButtonsModule, ModalModule, TabsModule, TooltipModule  } from 'ng2-bootstrap';
import {SelectModule} from 'ng2-select';

import { RegelnComponent } from './regeln/regeln.component';
import { SelectComponent } from './util/select/select.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersoenlichComponent } from './persoenlich/persoenlich.component';
import { ProfanComponent } from './profan/profan.component';
import { MagieComponent } from './magie/magie.component';
import { KarmaComponent } from './karma/karma.component';
import { HttpTestComponent } from './http-test/http-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegelnComponent,
    SelectComponent,
    NavigationComponent,
    PersoenlichComponent,
    ProfanComponent,
    MagieComponent,
    KarmaComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
