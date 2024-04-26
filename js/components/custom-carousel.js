import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';


class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
  }

  connectedCallback() {
    this.initCarousel();
  }

  getCarouselSettings() {
    const readOnlyPaginationType = "dots";
    this.currentWidth = window.innerWidth;
    //default settings
    const defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    }
    let carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    const { breakpoints, ...otherSettings } = this.carouselSettings;
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          }
          else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }

          const { pagination, navigation, ...otherResponsiveSettings } = this.breakpointSettings;
          this.carouselSettings = { ...otherSettings, ...otherResponsiveSettings, pagination, navigation };
        }
      })
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      const { navigation, pagination, progressPagination,paginationType=readOnlyPaginationType["dots"], ...otherSwiperSettings } = this.carouselSettings;
      carouselSettings = { ...otherSwiperSettings };
      if (navigation) {
        const navigationNext = this.parent.querySelector('[data-navigation-next]');
        const navigationPrev = this.parent.querySelector('[data-navigation-prev]');
        carouselSettings = {
          ...carouselSettings, navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        }
      }
      if (pagination) {
        const swiperPagination = this.parent.querySelector('[data-pagination]');
        let pagination = {
          el: swiperPagination,
          clickable: true,
        }

        if(paginationType == "bars") {
   
           pagination = {
            el: swiperPagination,
            clickable: true,
            type: 'custom',
            renderCustom: (swiper, current, total) => {
              let text = '';
               (Array(total).fill()).forEach((_,index) => {
                  text += `<div class='swiper-pagination-bullet swiper-pagination--bar ${index == (current - 1) ? 'swiper-pagination-active' : ''} '>
                    <div class="swiper-pagination__progress"></div>
                  </div>`
               })
               return text;
            }
          }
        }

        if (progressPagination) {
          pagination = {
            el: swiperPagination,
            type: 'progressbar'
          }
        }

        carouselSettings = { ...carouselSettings, pagination }
      }
    }
    return carouselSettings;
  }

  initCarousel() {
    this.parent = this.closest('[data-parent]');
    this.carouselSettings = JSON.parse(this.querySelector('[data-settings]')?.innerHTML || "{}");
    this.placeholders = this.querySelector('[data-carousel-placeholder]')?.innerHTML;
    this.navigations = this.parent.querySelector('[data-navigations]');
    this.currentWidth = window.innerWidth;
    window.carousels = window.carousels || {};

    const swiperNavigationElements = `
    <div data-navigation-next data-navigation  class="swiper-navigation swiper-navigation--next ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#2F4775"/>
        <path d="M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531" stroke="white" stroke-width="2" stroke-linecap="square"/>
    </svg>
    </div>
    <div data-navigation-prev data-navigation class="swiper-navigation swiper-navigation--prev ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''} ">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#2F4775"/>
        <path d="M22.7061 26.353L16.9413 20.5883L22.7061 14.8236" stroke="white" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>
    `
   this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    const carouselSettings = this.getCarouselSettings();
    const linkedSlider = window.carousels[`${this.carouselSettings.linked}`];
    //get thumbs
    if(linkedSlider) {
       carouselSettings.thumbs = {
         swiper: linkedSlider
       }
    }

    this.swiper = new Swiper(this.container, {
      on: {
        beforeInit: () => {
          const { navigation, pagination } = carouselSettings || {};
          debugger;
          if (!navigation) {
            this.parent.querySelectorAll('[data-navigation]').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          }
          else {
            this.parent.querySelector('.swiper-navigation--hide') && this.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }

          if (!pagination) {
            this.parent.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          }
          else {
            this.parent.querySelector('.swiper-pagination--hide') && this.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: (swiper) => {
           const name = this.carouselSettings.name;
           if(name) {
             window.carousels = window.carousels || {};
             window.carousels[`${name}`] = swiper;
           }
        },
      },
      modules: [Navigation, Pagination, Autoplay, Thumbs],
      ...carouselSettings
    });
  }
}
export default CustomCarousel;
