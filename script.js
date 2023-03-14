document.getElementById('leftButton').addEventListener('click', () => {
  flashColor('green');
});

document.getElementById('rightButton').addEventListener('click', () => {
  flashColor(getRandomColor());
});

function flashColor(color) {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, i * 500);

    setTimeout(() => {
      document.body.style.backgroundColor = 'white';
    }, i * 500 + 250);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

