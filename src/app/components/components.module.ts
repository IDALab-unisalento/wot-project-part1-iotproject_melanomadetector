import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlidesComponent} from './slides/slides.component';
import {StartComponent} from './start/start.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SlidesComponent, StartComponent],
  exports: [SlidesComponent, StartComponent],
  imports: [
    CommonModule,
      IonicModule
  ]
})
export class ComponentsModule { }
