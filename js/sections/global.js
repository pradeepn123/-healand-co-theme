//global imports here
import announcementBar from "./announcementBar";
import bundleTabsSection from "./bundleTabsSection";
import hideRewards from "./hideRewards";
import importCustomElements from "JsComponents/import-custom-elements";
import readmore from "./readmore";
import sectionScroll from './section-scroll'

//config lazyload to default settings

document.addEventListener('DOMContentLoaded', () => {
    announcementBar();
    bundleTabsSection();
    hideRewards();
    importCustomElements();
    readmore();
    sectionScroll();
})