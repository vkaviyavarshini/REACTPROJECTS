var display = document.getElementById('display');

function buttonClick(value) {
  if (value === '=') {
    display.value = eval(display.value);
  } else if (value === 'C') {
    display.value = '';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}