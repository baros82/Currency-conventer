{
     const welcome = () => {
          console.log("Hello World");
     };

     welcome();

     const calculate = (ammount, currency) => {

          const rateUSD = 4.48;
          const ratePLN = 1;
          const rateARS = 0.026;
          const rateEUR = 4.68;

          switch (currency) {
               case "currencyUSD":
                    return ammount * rateUSD;

               case "currencyPLN":
                    return ammount * ratePLN;

               case "currencyARS":
                    return ammount * rateARS;

               case "currencyEUR":
                    return ammount * rateEUR;
          };
     }

     const calculateResult = (resultValue, result) => {

          const rateUSD = 4.48;
          const ratePLN = 1;
          const rateARS = 0.026;
          const rateEUR = 4.68;

          switch (resultValue) {
               case "resultUSD":
                    return result / rateUSD;

               case "resultPLN":
                    return result / ratePLN;

               case "resultARS":
                    return result / rateARS;

               case "resultEUR":
                    return result / rateEUR;
          };
     }

     const onFormSubmit = (event) => {
          event.preventDefault();

          const currencyElement = document.querySelector(".js-currency");
          const ammountElement = document.querySelector(".js-ammount");
          const resultElement = document.querySelector(".js-result");
          const resultValueElement = document.querySelector(".js-resultValue");

          let currency = currencyElement.value;
          let ammount = ammountElement.value;
          const result = calculate(ammount, currency);
          const resultValue = resultValueElement.value;
          const outcome = calculateResult(resultValue, result);

          resultElement.value = `${outcome}`;
     };

     const init = () => {
          const formElement = document.querySelector(".js-form");

          formElement.addEventListener("submit", onFormSubmit);
     };

     init();

};
