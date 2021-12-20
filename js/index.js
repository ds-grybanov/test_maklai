const num1 = document.getElementById('form-input-1');
const num2 = document.getElementById('form-input-2');
const operator = document.querySelector('.form-inputs__number-select');
const btn = document.querySelector('.form-btn');
const textResult = document.querySelector('.form-result');
let result = null;


btn.addEventListener('click', count);

function count() {
  result = operation(num1, num2, operator)
  textResult.innerHTML = `Результат <span>${Math.trunc(result)}</span>`;
  textResult.classList.add('hide');
  num1.value = '';
  num2.value = '';
}

function operation(value1, value2, operator) {
  value1 = parseInt(value1.value);
  value2 = parseInt(value2.value);
  operator = operator.value;
  if (operator == '+') {
    return value1 + value2;
  } else if (operator == '-') {
      return value1 - value2;
  } else if (operator == '*') {
      return value1 * value2;
  } else if (operator == '/') {
      return value1 / value2;
  }
}