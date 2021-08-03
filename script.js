const colorPicker = document.querySelector('.color-picker');
const colors = document.querySelectorAll('.color-picker span');

const colorMode = function (color) {
  for (let i = 0; i < colors.length; i++) {
    if (color.target == colors[0]) {
      document.body.style.backgroundColor = '#eaeaea';
    } else if (color.target == colors[1]) {
      document.body.style.backgroundColor = '#FFFF4D';
    } else if (color.target == colors[2]) {
      document.body.style.backgroundColor = ' #1D314D';
    } else if (color.target == colors[3]) {
      document.body.style.backgroundColor = '#4DFF4D';
    } else if (color.target == colors[4]) {
      document.body.style.backgroundColor = '#FFB20D';
    }
  }
};

colorPicker.addEventListener('click', colorMode);
