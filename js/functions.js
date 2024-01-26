const getRandomColor = () => {
  let code = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color += Math.floor(Math.random(code));
  }

  console.log(color);
  return color;
};
gsap.from('.circle', {
  duration: 1,
  opacity: 0,
  y: 'random(-200, 200)',
  x: 'random(-200, 200)',
  stagger: 0.25,
  ease: 'bounce',
});

getRandomColor();
