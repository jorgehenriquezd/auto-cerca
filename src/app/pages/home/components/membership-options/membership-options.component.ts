import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
@Component({
  selector: 'app-membership-options',
  templateUrl: './membership-options.component.html',
  styleUrls: ['./membership-options.component.scss']
})
export class MembershipOptionsComponent implements OnInit {

 
  config: SwiperOptions = {};
  screenx = window.screen.width

  constructor() {
  }

  ngOnInit(): void {

    if (this.screenx  > 1190) {
      this.config = {
        slidesPerView: 5,
        spaceBetween: 5,
        autoplay: { delay: 2000 },
        pagination: { clickable: true }
      }
    }

    if (this.screenx  < 1190) {
      this.config = {
        slidesPerView: 3.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx  < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx < 670) {
      this.config = {
        slidesPerView: 2.1,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx < 500) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx < 471) {
      this.config = {
        slidesPerView: 1.4,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }
  }

  onResize(event: any) {

    let size = event.target.innerWidth

    if (size > 1190) {
      this.config = {
        slidesPerView: 5,
        spaceBetween: 5,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 1190) {
      this.config = {
        slidesPerView: 3.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 670) {
      this.config = {
        slidesPerView: 2.1,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (this.screenx < 500) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.4,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

  }

  onSwiper(swiper: any) {

  }
  onSlideChange() {

  }

}