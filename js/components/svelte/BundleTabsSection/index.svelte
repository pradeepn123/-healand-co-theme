<script>
    import Content from "./content.svelte";
    import Header from "./header.svelte";
    import Images from "./images.svelte";
    import ImagerSlider from "./imager-slider.svelte";
    import { onMount } from "svelte";
    export let shopifyData;

    //static data from shopify
    const { title, products } = shopifyData;
    let currentSelectedProductIndex = products.length > 1 ? 1 : 0;
    //Computed data which would be re-assigned each time a state changes, 
    // we use $: declarative for declaring computed data
    $:selectedProduct = products[currentSelectedProductIndex]
    $:productImages = products.map(({image},index) => {
       return {
          isSelected: index == currentSelectedProductIndex,
          image
       }
    })



</script>

<div class="bundleTabsSection">
    <Header sectionTitle={title} productTitle={selectedProduct?.title} />
    <Images
    bind:currentSelectedProductIndex 
    images={productImages}
    />
    <Content content={selectedProduct?.content} />
</div>

<!-- bind: keyword enables 2-way data-binding , which means updating the data from child will update over the parent -->