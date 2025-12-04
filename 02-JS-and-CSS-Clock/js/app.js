'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secsToDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secsToDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }

  const minutes = now.getMinutes();
  const minsToDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsToDegrees}deg)`;

  const hours = now.getHours();
  const hoursToDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
