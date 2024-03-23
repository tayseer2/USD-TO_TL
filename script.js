
let input = document.getElementsByName("dollar")[0];
let result = document.getElementsByClassName("result")[0];

const apiKey = 'YOUR_API_KEY';

input.oninput = function () {
  fetch(`https://open.er-api.com/v6/latest/USD?app_id=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const usdToTry = data.rates.TRY;
      const convertedValue = (input.value * usdToTry).toFixed(2);
      result.innerHTML = `${input.value} USD Dollar = ${convertedValue} turk TL`;
    })
    .catch(error => {
      console.error('حدث خطأ:', error);
    });
};
