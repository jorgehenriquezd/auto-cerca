import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchVehicleComponent } from './pages/search-vehicle/search-vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'car-detail',
    component: CarDetailComponent
  },
  {
    path: 'search-vehicle',
    component: SearchVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
