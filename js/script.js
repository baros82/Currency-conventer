console.log("Hello World");

let ammountElement = document.querySelector(".js-ammount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency")
let formElement = document.querySelector(".js-form")
let resultValueElement = document.querySelector(".js-resultValue")
let rateUSD = 4.48;
let ratePLN = 1;
let rateARS = 0.026;
let rateEUR = 4.68;

formElement.addEventListener("submit", (event) => {
     event.preventDefault();

     let result;
     let ammount = ammountElement.value;
     let currency = currencyElement.value;

     switch (currency) {
          case "currencyUSD":
               result = ammount * rateUSD ;
               break;
          case "currencyPLN":
               result = ammount * ratePLN ;
               break;
          case "currencyARS":
               result = ammount *rateARS ;
               break;
          case "currencyEUR":
               result = ammount * rateEUR;
     }

     let resultValue = resultValueElement.value
     let result2
     switch (resultValue){
          case "resultUSD":
               result2 = result/rateUSD;
               break;
          case "resultPLN":
               result2 = result/ratePLN;
               break;
          case "resultARS":
               result2 = result/rateARS;
               break;
          case "resultEUR":
               result2 = result/rateEUR;
     }

     resultElement.value = `${result2.toFixed(2)} `;
});