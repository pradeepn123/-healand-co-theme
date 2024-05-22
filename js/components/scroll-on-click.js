import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin); 
export const scrollOnClick = (selector,target,offset = 0) => {
   document.querySelectorAll(selector)?.forEach(item => item.addEventListener('click', (ev) => {
    ev.preventDefault();
    gsap.to(window,1, {scrollTo:{y:target, offsetY:offset}});
   }))  
}