<script>
    import { onMount } from 'svelte';
    import ImagerSlider from './imager-slider.svelte';
    import ResponsiveImage from 'SvelteComponents/Responsive-Image';
    import getCurrentBreakpoint from 'JsComponents/breakpoints.js'
    export let images = [];
    export let currentSelectedProductIndex; //this is where the parent state will be binded
    //update the parent state
    const handleProductSelect = (index) => {
        currentSelectedProductIndex = index;
    };

    let currentBreakpoint;

    onMount(() => {
      currentBreakpoint =  getCurrentBreakpoint();
      console.log(currentBreakpoint);
    })
    
</script>
{#if currentBreakpoint >= 1200 }
<div class="product-image__list">
    {#each images as imageObj, index}
        <div class="product-image__item"
        class:product-image__item--selected={imageObj?.isSelected}
        on:click={() => handleProductSelect(index)}>
            <ResponsiveImage image_aspect_ratio={1} image={imageObj.image} />
        </div>
    {/each }
</div>
{:else}
    <ImagerSlider
    bind:currentSelectedProductIndex 
    images={images}
    />
{/if}


