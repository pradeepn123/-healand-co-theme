

<script>  
  export let image_aspect_ratio;
  export let image;
  export let srcTokens; 
  export let maxWidth;
  let min = 100 ;
  let max = 10000;
  let diff = max - min;
  let generated_image_id = Date.now() / diff + min;
  let displayImage = image;
  if(!displayImage) {
    displayImage = {
      width: 1920,
      height:1080,
      id: Math.random() * 10 * Date.now(),
      src:'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
    }
  }

  let image_id = displayImage.id ||  (Math.random() * 100000) * Date.now();
  let max_height_image = displayImage.height
  let max_width_image =  displayImage.width 
  if(maxWidth) {
    if(max_width_image >= parseInt(maxWidth)) {
      max_width_image = maxWidth
    }
  }
  const max_width_image_float = max_width_image * 1.0;
   ((aspectRatio) => {
    if(aspectRatio <= 1 ) {
      max_height_image = image_height
       max_width_image = max_height_image * image_aspect_ratio 
    }
    else {
      max_height_image = max_width_image / image_aspect_ratio
    }
  })();
  
  const getWrapperStyles = () => {
      return `
      --padding-top: ${ (max_height_image / max_width_image_float) * 100}%;
      --max-height: ${ max_height_image }px;
      --max-width: ${ max_width_image }px;
      `
  }
  
  const getImageStyle = () => {
      return `
      max-width: ${ max_width_image }px;
      max-height: ${ max_height_image }px;
      object-fit: contain;`
  }
  
  </script>
  
  
  
  <div id="ImageWrapper-{image_id}-{generated_image_id}" data-image-id="{ image_id }" class="responsive-image__wrapper" style={getWrapperStyles()}>
    <img id="Image-{image_id }-{generated_image_id}" 
      class="responsive-image__image"
      loading="lazy"
      src={displayImage.src}
      style={getImageStyle()}
    >
  </div>
  
  
  <style>
  .responsive-image__wrapper:before {
      content: '';
      width: 100%;
      display: block;
      padding-top: var(--padding-top);
  }
  
  .responsive-image__wrapper {
      max-width: var(--max-width);
      height: 100%;
      position: relative;
      max-height: var(--max-height);
      height: auto;
  }
  
  .responsive-image__image {
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
      width: 100%;
  }
  </style>