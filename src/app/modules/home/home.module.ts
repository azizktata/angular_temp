import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandpageComponent } from './components/landpage/landpage.component';
import { AnotherpageComponent } from './components/anotherpage/anotherpage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LandpageComponent,
    AnotherpageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SharedModule
  ],
  exports: [LandpageComponent]
})
export class HomeModule { }
