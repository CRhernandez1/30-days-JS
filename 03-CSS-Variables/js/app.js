'use strict';

const controlInputs = document.querySelectorAll('.controls input');

const updateValues = (e) => {
  const inputElement = e.target;
  const suffix = inputElement.dataset.sizing || ''; // Al no tener dataset el input de type color, hay que hacer esto para evitar el fallo

  document.documentElement.style.setProperty(
    `--${inputElement.name}`,
    inputElement.value + suffix
  );
};

controlInputs.forEach((input) => input.addEventListener('input', updateValues));
