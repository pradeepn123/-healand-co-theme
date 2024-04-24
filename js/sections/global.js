//global imports here
import announcementBar from "./announcementBar";
import bundleTabsSection from "./bundleTabsSection";
import hideRewards from "./hideRewards";

//config lazyload to default settings

document.addEventListener('DOMContentLoaded', () => {
    announcementBar();
    bundleTabsSection();
    hideRewards();
})