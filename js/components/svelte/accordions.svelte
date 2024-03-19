<script>
    export let open = false;
    const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"> 
                        <path d="M11 1.5L6 6.5L1 1.5" stroke="#2F4775" stroke-width="2"/>
                    </svg>`;
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 6.5L6 1.5L11 6.5" stroke="#2F4775" stroke-width="2"/>
                    </svg>`;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);
</script>

<div class="accordion custom_filter_header">
    <div class="header" on:click={handleClick}>
        <div class="text">
            <slot name="head"></slot>	
        </div>

        {#if open}
            <button>
                {@html closeIcon}
            </button>
        {:else}
            <button>
                {@html openIcon}
            </button>
        {/if}
    </div>

    {#if open}
        <div class="details" transition:slide>
            <slot name="details">
            </slot>
        </div>
    {/if}
</div>

<style>
   
</style>
