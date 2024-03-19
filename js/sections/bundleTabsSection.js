import svelteWrapper from "JsComponents/svelte-wrapper"; //wrapper that inject svelte into DOM
import BundleTabsSection from 'SvelteComponents/BundleTabsSection/index.svelte'; //svelte component to load

export default( ) => {
    svelteWrapper(BundleTabsSection,'bundle-tabs-section', '#product-bundle-data')
}