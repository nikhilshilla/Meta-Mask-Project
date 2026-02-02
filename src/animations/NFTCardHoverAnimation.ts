import gsap from "gsap";
import { Observer } from "gsap/Observer"

export const NFTCardHoverAnimation = () => {
    gsap.registerPlugin(Observer);

    Observer.create({
        target: ".purple_card_right",
        type: "pointer",
        onHover: () => {
            gsap.to(".payusd_right", {
                scale: 0,
                duration: 0.5,
                opacity: 0
            })

            gsap.to(".subtitle_right", {
                opacity: 0,
                duration: 0.5
            })

            gsap.to(".lower_subtitle_right", {
                opacity: 1,
                duration: 0.5,
                y: -5
            })

            gsap.to(".payeth_right", {
                y: -70,
                x: -80,
                ease: "back.out",
                duration: 0.5,
                delay: 0.06,
            })

            gsap.to(".payusdc_right", {
                opacity: 1,
                ease: "back.out",
                scale: 1
            })

            gsap.to(".swap_icon_right", {
                rotate: -180,
                y: -35,
                duration: 0.5,
                backgroundColor: "var(--purple-lighter)",
                color: "var(--purple-dark)",
                ease: "back.out"
            })

            gsap.to(".purple_card_right", {
                height: "250%",
                duration: 0.5,
                ease: 'back'
            })


        },
        onHoverEnd: () => {
            gsap.to(".payusd_right", {
                scale: 1,
                ease: "back.out",
                opacity: 1
            })

            gsap.to(".subtitle_right", {
                opacity: 1,
                duration: 0.5
            })

            gsap.to(".lower_subtitle_right", {
                opacity: 0,
                duration: 0.1,
                y: 0
            })

            gsap.to(".payeth_right", {
                y: 0,
                x: 0,
                ease: "back.out"
            })

            gsap.to(".swap_icon_right", {
                rotate: 0,
                y: 0,
                duration: 0.5,
                ease: "back.out",
                color: "var(--purple-lighter)",
                backgroundColor: "var(--purple-light)",
            })
            gsap.to(".purple_card_right", {
                height: "100%",
                duration: 0.5,
                ease: 'back'
            })

            gsap.to(".payusdc_right", {
                opacity: 0,
                scale: 0,
                ease: "back.out"
            })
        }
    })
}