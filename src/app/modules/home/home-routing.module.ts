import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './components/landpage/landpage.component';
import { AnotherpageComponent } from './components/anotherpage/anotherpage.component';

const routes: Routes = [
  { path: 'table1', component: LandpageComponent },
  { path: 'table2', component: AnotherpageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
