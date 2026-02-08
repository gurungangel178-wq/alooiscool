// go Buckeyes!
const colors = ["#bb0000", "#ffffff"];

const run = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"]
  };

  window.confetti({
    ...defaults,
    particleCount: 10,
    scalar: 1
  });

  window.confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2
  });

  window.confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3
  });

  window.confetti({
    ...defaults,
    particleCount: 30,
    scalar: 4
  });

  
};

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

const text = document.getElementById('text');
const gif = document.getElementById('gif');
const usImg = document.getElementById('us');

var index = 0;

const noPhrases = [
  "No",
  "Are you sure?",
  "I am asking nicely though",
  "Please please?",
  "I'll give you a kiss",
  "D: u srsly sayinnn no to meeeeeee:(",
  "Cmon babyyy",
  "DO IT ARJUN PRATAP SINGH U BITCH",
  "I'll die if you dont say yes",
  "Oh no! I am dead",
  "I am a ghost now",
  "I'll haunt you if you dont say yes",
  "*ghost noises*",
  "*begging ghost noises*",
  "Tujhe chicken breast ki kasam",
  "Last chance",
  "Iske baad button hi htadegi mai",
];

yesButton.addEventListener('click', () => {
  text.textContent = 'Yaaaaaaaaayyyyyyyyyy!!!! I love you my telephone pole <3';
  gif.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';

  usImg.style.display = 'block';

  run();
});

noButton.addEventListener('click', () => {
  index++;
  if(index === noPhrases.length) {
    noButton.style.display = 'none';
  }
  noButton.textContent = noPhrases[index];

  yesButton.style.scale = 1 + 0.15 * (index +1);
  noButton.style.scale = 1 - 0.025 * (index +1);

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  const randomTop = Math.random() * (viewportHeight - buttonHeight);
  const randomLeft = Math.random() * (viewportWidth - buttonWidth);

  noButton.style.top = `${randomTop}px`;
  noButton.style.left = `${randomLeft}px`;
});
