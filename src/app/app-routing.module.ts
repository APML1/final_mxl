import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { VehicleissueComponent } from './vehicleissue/vehicleissue.component';

const routes: Routes = [
  {path:"",component:VehicleissueComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
