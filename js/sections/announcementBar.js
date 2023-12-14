import svelteWrapper from "JsComponents/svelte-wrapper"; //wrapper that inject svelte into DOM
import AnnouncementBar from 'SvelteComponents/AnnouncementBar.svelte'; //svelte component to load

export default( ) => {
    svelteWrapper(AnnouncementBar,'announcement-bar', '#announcement-bar-data')
}
