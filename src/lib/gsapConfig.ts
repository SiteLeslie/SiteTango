import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation settings
gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

// Custom eases
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
