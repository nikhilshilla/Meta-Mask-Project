import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const LogoAnimation = () => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(".metamask_logo", {
        y: '70%',
        scale: 2
    }, {
        scrollTrigger: {
            trigger: ".logo_section",
            pin: true,
            start: 'top 10%',
            end: "end+=400",
            scrub: true
        },
        y: '30%',
        scale: 0.8
    })
}