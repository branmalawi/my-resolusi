const grid = document.querySelectorAll('.grid');
const styleImg = getComputedStyle(grid[0]);
const root = document.querySelector(':root');

window.onload = window.onresize = () => {
  root.style.setProperty('--width',`${styleImg.width}`);
};

