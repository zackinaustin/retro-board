import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GoneBetterComponent } from './panel/gone-better/gone-better.component';
import { PanelItemComponent } from './panel-item/panel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GoneBetterComponent,
    PanelItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
