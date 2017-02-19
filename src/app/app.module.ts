import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AlertModule, ButtonsModule, ModalModule, TabsModule, TooltipModule  } from 'ng2-bootstrap';
import {SelectModule} from 'ng2-select';

import { RegelnComponent } from './components/regeln/regeln.component';
import { SelectComponent } from './components/util/select/select.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersoenlichComponent } from './components/persoenlich/persoenlich.component';
import { ProfanComponent } from './components/profan/profan.component';
import { MagieComponent } from './components/magie/magie.component';
import { KarmaComponent } from './components/karma/karma.component';
import { FertigkeitenComponent } from './components/fertigkeiten/fertigkeiten.component';

import { HttpService } from './services/http/http.service';
import { FilterService } from './services/filter/filter.service';

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
    FertigkeitenComponent
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
  providers: [
    HttpService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
