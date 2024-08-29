document.getElementById('convert-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number').value;
  const number = parseInt(numberInput);
  const output = document.getElementById('output');
  
  // Check if input is empty
  if (numberInput.trim() === '') {
    output.textContent = 'Please enter a valid number';
    return;
  }
  
  // Check if input is a number
  if (isNaN(number)) {
    output.textContent = 'Please enter a valid number';
    return;
  }
  
  // Check if number is less than 1
  if (number < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }
  
  // Check if number is greater than or equal to 4000
  if (number >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }
  
  // If all validations pass, convert the number to Roman numeral
  output.textContent = convertToRoman(number);
});

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  
  let roman = '';
  
  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  
  return roman;
}
