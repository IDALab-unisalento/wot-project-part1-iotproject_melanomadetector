import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApideepskinService} from './services/apideepskin.service';
import {HttpClientModule} from '@angular/common/http';
import {ReadingModalComponent} from './components/reading-modal/reading-modal.component';

@NgModule({
  declarations: [AppComponent, ReadingModalComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApideepskinService],
  bootstrap: [AppComponent]
})
export class AppModule {}
