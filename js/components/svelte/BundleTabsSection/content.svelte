<script>
    export let content;
    console.log(content);
    import Accordions from "SvelteComponents/accordions.svelte";
</script>

<div class="content__list content__list--desktop">
    {#each content as accordionTitle, index}
        <div class="content__list-item">
            <div class="content__image-title-wrap">
                <img src="{accordionTitle.icon}" alt="">
                <h6>{accordionTitle.heading}</h6>
            </div>
            <p>{accordionTitle.description}</p>
        </div>
    {/each}
</div>

<div class="content__list content__list--mobile">
    {#each content as accordionTitle, index}
        <Accordions open={index == 0}>
            <span slot="head">
                    {@html `<div class="">
                        <img src="${accordionTitle.icon}" alt="">
                        <h6>${accordionTitle.heading}</h6>
                    </div>`}                    
            </span>
            <span slot="details">
                {@html `
                <p>${accordionTitle.description}</p>
                `}
            </span>
        </Accordions>
    {/each}
</div>
