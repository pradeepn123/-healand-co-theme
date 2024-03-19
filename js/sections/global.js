//global imports here
import announcementBar from "./announcementBar";
import bundleTabsSection from "./bundleTabsSection";

//config lazyload to default settings

document.addEventListener('DOMContentLoaded', () => {
    announcementBar();
    bundleTabsSection();
})