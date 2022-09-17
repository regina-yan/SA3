import './style.scss';

let time = 0;
const timer = function Function() {
  time += 1;
  document.getElementById('main').innerHTML = (`You've been on this page for ${time} seconds`);
};
setInterval(timer, 1000);
