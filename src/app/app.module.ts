import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//=============GLOBAL===================
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
//======================================


//===================HOME PAGE=====================
import { HomeComponent } from './pages/home/home.component';
import { SliderAdComponent } from './pages/home/components/slider-ad/slider-ad.component';
import { MembershipOptionsComponent } from './pages/home/components/membership-options/membership-options.component';
import { ShippingScheduleComponent } from './pages/home/components/shipping-schedule/shipping-schedule.component';
import { SearchByMakesComponent } from './pages/home/components/search-by-makes/search-by-makes.component';
import { TrendingComponent } from './pages/home/components/trending/trending.component';
import { VehicleShippedComponent } from './pages/home/components/vehicle-shipped/vehicle-shipped.component';
import { AboutUsComponent } from './pages/home/components/about-us/about-us.component';
import { CountriesComponent } from './pages/home/components/countries/countries.component';
import { DownloadAppComponent } from './pages/home/components/download-app/download-app.component';
import { TestimonialComponent } from './pages/home/components/testimonial/testimonial.component';
import { VideosComponent } from './pages/home/components/videos/videos.component';
//================================================


//================SEARCH VEHICLE PAGE==============
import { SearchVehicleComponent } from './pages/search-vehicle/search-vehicle.component';
//=================================================


//================CAR DETAIL PAGE==============
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
//=================================================



//===============Libraries================
import { SwiperModule } from 'swiper/angular';
//========================================
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    CarDetailComponent,
    NavbarComponent,
    FooterComponent,
    SliderAdComponent,
    MembershipOptionsComponent,
    ShippingScheduleComponent,
    SearchByMakesComponent,
    TrendingComponent,
    VehicleShippedComponent,
    AboutUsComponent,
    CountriesComponent,
    DownloadAppComponent,
    SearchVehicleComponent,
    CardSliderComponent,
    TestimonialComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
