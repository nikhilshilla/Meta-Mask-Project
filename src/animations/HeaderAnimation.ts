import gsap from 'gsap'

// In HeaderAnimation.ts or wherever you're defining the function:
interface HeaderAnimationProps {
    container: React.RefObject<HTMLDivElement | null>
    headerFirst: React.RefObject<HTMLElement | null>
    headerSecond: React.RefObject<HTMLElement | null>
  }
  export const HeaderAnimation = ({
    container,
    headerFirst,
    headerSecond,
  }: HeaderAnimationProps) => {
    let lastScrollY = window.scrollY
    let lastScrollDirection: 'down' | 'up' | null = null
    let isAnimating = false
  
    const showSection = (
        showRef: React.RefObject<HTMLElement | null>,
        hideRef: React.RefObject<HTMLElement | null>
    ) => {
      if (!showRef.current || !hideRef.current || isAnimating) return
      isAnimating = true
  
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false
        },
      })
  
      tl.to(hideRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(hideRef.current, { display: 'none' })
          gsap.set(showRef.current, { display: 'block' })
        },
      }).fromTo(
        showRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        }
      )
    }
  
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY
      lastScrollY = currentY
  
      // Determine current direction string
      const currentDirection = scrollingDown ? 'down' : 'up'
  
      // Only animate if direction changed
      if (currentDirection !== lastScrollDirection) {
        if (scrollingDown) {
          showSection(headerSecond, headerFirst)
        } else {
          showSection(headerFirst, headerSecond)
        }
        lastScrollDirection = currentDirection
      }
    }
  
    // Initial state
    gsap.set(headerFirst.current, { display: 'block', opacity: 1 })
    gsap.set(headerSecond.current, { display: 'none', opacity: 0 })
  
    window.addEventListener('scroll', handleScroll)
  
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
  