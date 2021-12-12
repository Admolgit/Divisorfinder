// The Divisor Function
// - The user should be able to get a divisor of number between 1 and 50000000.
// - After getting the result, they should be able to refresh the page to enter another number by clicking the refresh button

const form = document.querySelector('form');
      btn = document.querySelector('.btn');
      numberInput = document.querySelector('.number-input');

form.addEventListener('submit', findDivisor);

function findDivisor(e) {

  let min = 0.99;
  let max = 50000001;

  if(numberInput.value !== ''  && numberInput.value > min && numberInput.value < max) {
    getDivisorCnt(numberInput.value);
  } else {
    showErr('Enter a valid number');
  }
  
  e.preventDefault();

}



let number = numberInput.value;

function getDivisorCnt(number) {

  let resulted = [];

  for(let i = 0; i <= number; i++) {
    if(number % i === 0) {
      resulted.push(i);
    }
  }
  console.log(resulted)
  
  const result = document.querySelector('.result');

  result.style.wordWrap = 'wrap'
  return result.innerText = resulted;

}

function showErr(error) {
  console.log(error)
  const par = document.createElement('p');
  const header = document.querySelector('.header') 
  const divisor = document.querySelector('.h3');

  // Add class to element
  par.className = 'alert';

  // Error style
  par.style.backgroundColor = 'red';

  par.style.color = 'white';

  par.style.fontSize = '24px';

  par.style.paddingLeft = '3rem';

  // Append to document
  par.appendChild(document.createTextNode(error));

  // Inserting error
  header.insertBefore(par, divisor);

  // Setting error timeout
  setTimeout(clearErr, 3000);

}

function clearErr() {
  document.querySelector('.alert').remove();
}