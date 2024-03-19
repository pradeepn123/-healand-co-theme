<script>
  import ResponsiveImage from "SvelteComponents/Responsive-Image";
  import { register } from 'swiper/element/bundle'
  import { onMount } from "svelte";
  export let currentSelectedProductIndex;
  export let images;
  register();
  onMount(() => {
    const swiperEl = document.querySelector("swiper-container");
    const params = {
      effect: "coverflow",
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      },
      scrollbar:"true",
      loop: false,
      slidesPerView: 2.8,
      on: {
        afterInit: function () {
          this.slideTo(1)
        },
        slideChange: function () {
          currentSelectedProductIndex = this.realIndex;
        },
      },
    };

    Object.assign(swiperEl, params);
    // and now initialize it
    swiperEl.initialize();

    swiperEl.addEventListener('swiperafterinit', () => {
      console.log("swiper init");
    });
  });
</script>

<!-- <div class={'content tab-inner-content"'}>
    <div class="swiper swiper--global">
        <div class="swiper-wrapper">
          {#each images as imageObj}    
              <div class={"swiper-slide"}>
                  <div class={`product-image__item`} >
                    <ResponsiveImage image_aspect_ratio={1} image={imageObj.image} />
                  </div>
              </div>  
                       
          {/each}
          </div>
          <div class="swiper-scrollbar"></div>
    </div>
  </div> -->

<swiper-container init="false">
  {#each images as imageObj}
  <swiper-slide>
    <div class={`product-image__item`}>
      <ResponsiveImage image_aspect_ratio={1} image={imageObj.image} />
    </div>
    </swiper-slide>
  {/each}
</swiper-container>

<style>
  swiper-container .swiper-slide-active .product-image__item  {
            opacity: 1;
            transform: scale(1.1);
        }
        swiper-container .swiper-scrollbar-horizontal{
            left: 50% !important;
            right: 50% !important;
            width: 80% !important;
            transform: translateX(-50%) !important;
        }
</style>