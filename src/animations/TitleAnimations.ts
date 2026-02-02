import gsap from "gsap";

export const animateTitle = (element: HTMLDivElement) => {
  const letters = element.querySelectorAll("span");

  gsap.fromTo(
    letters,
    { opacity: 0, x: -15 },
    {
      opacity: 1,

      x: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 4,
      ease: "power2.out",
    }
  );
};
