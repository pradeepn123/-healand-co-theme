<script>
    import JSON6 from 'json-6'
    import Accordion from "SvelteComponents/accordion.svelte";
    export let shopifyData;
    let componentProps = shopifyData;

    const updateTabProps = (updatedProps) => {
        if(updatedProps) {
        const {data:props} = JSON6.parse(updatedProps);
        ((Object.keys(props)).forEach((propKey) => {
            componentProps[propKey] = props[propKey]
        }))
        componentProps = componentProps
        }
    }

    window["custom"] = {
        ...window["custom"],
        "svelte": {
          "updateTabProps":updateTabProps
        }
    }

    $:tabsData = JSON.parse(JSON.stringify(componentProps));
    $:tabsTitle = Object.keys(componentProps);
    $:selectedKey = tabsTitle[0];
    
</script>

<div class="tab-section">
    <div class="tab-section__tabs tab-section--desktop">
        {#if tabsTitle.length >= 1}
            <div class="tab-section__tabs">
                {#each tabsTitle as tab}
                    <a
                        aria-label={tab.replace("_", " ")}
                        role="button"
                        class={`tab-section__tab-title ${
                            selectedKey == tab && "product-atb__button--active"
                        }`}
                        on:click={(ev) => {
                            selectedKey = tab;
                        }}>{tab.replace("_", " ")}</a
                    >
                {/each}
            </div>
            <div class="tab-section__tab-description">
                {@html tabsData[selectedKey]}
            </div>
        {/if}
    </div>
    <div class="tab-section__accordion tab-section--mobile">
        {#if tabsTitle.length >= 1}
            {#each tabsTitle as accordionTitle, index}
                <Accordion open={index == 0}>
                    <span slot="head">{accordionTitle.replace("_", " ")}</span>
                    <div slot="details">
                        {@html tabsData[accordionTitle]}
                    </div>
                </Accordion>
            {/each}
        {/if}
    </div>
</div>
