gsap.from('.nav-container', { duration: 1, y: '-100%', ease: 'bounce' });
gsap.from('.links', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
gsap.from('.left', { duration: 1, x: '-100vw' });
gsap.from('.right', { duration: 2, x: '-100vw', ease: 'power2.in', delay: 1 });

gsap.to('.footer', {
  duration: 1,
  y: 0,
  ease: 'elastic',
  delay: 1,
});

gsap.fromTo(
  '.button button',
  {
    y: 0,
    ease: 'elastic',
    rotation: 760,
    scale: 0,
    opacity: 0,
  },
  {
    duration: 1,
    y: 0,
    ease: 'elastic',
    delay: 1,
    rotation: 0,
    scale: 1,
    opacity: 1,
  }
);
