//variables
const space = document.querySelector('.space');
const scrollable = document.querySelector('.scrollable');
space.style.height = `${calcDynamicHeight(scrollable)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  console.log(objectWidth);
  return objectWidth - vw + vh + 100; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  scrollable.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  space.style.height = `${calcDynamicHeight(scrollable)}px`;
});