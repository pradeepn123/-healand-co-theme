
import { BREAKPOINTS } from "JsComponents/constants";
export default () => {
    const breakpointsValues = BREAKPOINTS;
    const breakpoints = Object.values(breakpointsValues);
    let currentBreakpoint = 320;
    breakpoints.forEach((breakpoint, index) => {
      if (window.innerWidth >= breakpoint) {
        if (breakpoints[breakpoint]) {
          currentBreakpoint = breakpointsValues[breakpoint];
        }
        else {
            currentBreakpoint = breakpoints[index];
        }
      }  
   })
   return currentBreakpoint;
}