import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CardAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".card_section");

  sections.forEach((section: any, index: number) => {
    const q = gsap.utils.selector(section);

    const card_tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: 2,
        start: "center center",
        end: "+=1200",
        pin: true,
      },
      defaults: {
        ease: "power3.out",
        duration: 1.5,
      },
    });

    if (index === 1) {
      // Second Section: Zoom Out / Scale Down Animation
      // "GET MORE OUT OF CRYPTO will come out from the screen... cover full screen"
      card_tl.fromTo(
        [q(".card_title"), q(".card_component")],
        {
          scale: 10,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    } else {
      // Default Animation (Rotate In)
      card_tl
        .fromTo(
          q(".card_component"),
          {
            opacity: 0,
            rotateY: 60,
            rotateX: 45,
            transformPerspective: 2300,
            transformOrigin: "center top",
          },
          {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
          }
        )
        .fromTo(
          q(".card_title"),
          {
            opacity: 0,
            scale: 1,
          },
          {
            opacity: 1,
            scale: 1.2,
          }
        );
    }

    // Common Ending Sequence (Side cards slide up)
    card_tl
      .to(q(".card_title"), {
        scale: 0.7,
        opacity: 1,
      })
      .to(q(".card_component"), {
        opacity: 0,
      })
      .fromTo(
        q(".card_border"),
        {
          border: "2px solid transparent",
        },
        {
          border: "2px solid white",
        },
        "<"
      )
      .fromTo(
        q(".slide_contents"),
        {
          y: 1900,
        },
        {
          y: 0,
        }
      );
  });
};
