export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 60 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', // This gives a more natural feel with bounce
          stiffness: 100, // Controls the "bounciness"
          damping: 20, // Controls how quickly the animation slows down
          delay: delay,
          duration: 0.6, // Slightly longer duration for a smoother effect
          ease: 'easeOut', // Use a more natural easing function
        },
      },
    };
  };
  