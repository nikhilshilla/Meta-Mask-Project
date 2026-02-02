import gsap from "gsap";

export const LoadingAnimation = () => {
  const tl1 = gsap.timeline({
    defaults: {duration: 0.6}
  });

  
  tl1.fromTo(".metamask", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }).to(".metamask", {
    opacity: 0,
    duration: 0.6,
  })
    .to(".slide_6", {
      y: "600",
      duration: 0.6,
    })
    .to(
      ".slide_8",
      {
        y: "-600",
      },
      "<"
    )
    .to([".slide_4", ".slide_1"], {
      x: -120,
    })
    .to(
      [".slide_5", ".slide_7"],
      {
        x: 220,
      },
      "<"
    ).fromTo(
      ".slide_1", {
        clipPath: "polygon(0% 0%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)"
    }, {
        clipPath: "polygon(0% 0%, 20% 0%, 100% 80%, 100% 100%, 0% 100%)"
      }
    , "<")  
    .fromTo(
      ".slide_4",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)",
      }
    )
    .fromTo(
      ".slide_1",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      ".slide_2",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      ".slide_5",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%)",
      },
      "<"
    )
    .fromTo(
      ".slide_7",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      ".slide_3",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%)",
      },
      "<"
    ).to(".loading_screen_container", {
      display: 'none',
      delay: 1
    })

  // gsap.to(".slide_5", {
  //     x: "200"
  // })

  // gsap.to(".slide_7", {
  //     x: "200"
  // })

  const slide_4_tl = gsap.timeline();
};
