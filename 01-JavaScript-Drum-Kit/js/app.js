'use strict';

const keysContainer = document.querySelector('.keys');

const playSound = (e) => {
  const keyCode = e.code;

  const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!keyElement) return;

  const note = keyElement.dataset.key;
  const audioElement = document.querySelector(`audio[data-key="${note}"]`);

  if (!audioElement) return;

  keyElement.classList.add('playing');
  audioElement.currentTime = 0;
  audioElement.play();
};

const removePlaying = (e) => {
  if (e.propertyName !== 'transform') return;

  const currElement = e.target;

  if (currElement.classList.contains('key')) {
    currElement.classList.remove('playing');
  }
};

document.addEventListener('keydown', playSound);
keysContainer.addEventListener('transitionend', removePlaying);
