import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';

@Component({
  selector: 'app-slider-ad',
  templateUrl: './slider-ad.component.html',
  styleUrls: ['./slider-ad.component.scss']
})
export class SliderAdComponent implements OnInit {

  config = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 2000 },  
  }

  ads = [
    { url: '../../../../../assets/img/slide_1.png', color: '#dae3ec' },
    { url: '../../../../../assets/img/slide_2.png', color: '#3a00b4' },
    { url: '../../../../../assets/img/slide_3.png', color: '#ffd25c' },
    { url: '../../../../../assets/img/slide_4.png', color: '#3076b4' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {

  }
  onSlideChange() {

  }
}
