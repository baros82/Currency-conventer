{
     const welcome = () => {
          console.log("Hello World");
     };

     

     const calculateAmountInPln = (ammount, currency) => {

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

     const calculateResult = (resultValue, amountInPln) => {

          const rateUSD = 4.48;
          const ratePLN = 1;
          const rateARS = 0.026;
          const rateEUR = 4.68;

          switch (resultValue) {
               case "resultUSD":
                    return amountInPln / rateUSD;

               case "resultPLN":
                    return amountInPln / ratePLN;

               case "resultARS":
                    return amountInPln / rateARS;

               case "resultEUR":
                    return amountInPln / rateEUR;
          };
     }

     const updateResultText = (outcome) => {
           const resultElement = document.querySelector(".js-result");
           
           resultElement.value = `${outcome.toFixed(2)}`;
     }

     const onFormSubmit = (event) => {
          event.preventDefault();

          const currencyElement = document.querySelector(".js-currency");
          const ammountElement = document.querySelector(".js-ammount");
          const resultValueElement = document.querySelector(".js-resultValue");

          let currency = currencyElement.value;
          let ammount = ammountElement.value;
          const amountInPln = calculateAmountInPln(ammount, currency);
          const resultValue = resultValueElement.value;
          const outcome = calculateResult(resultValue, amountInPln);
          
          updateResultText(outcome);
          
     };

     const init = () => {
          const formElement = document.querySelector(".js-form");

          welcome();

          formElement.addEventListener("submit", onFormSubmit);
     };

     init();

};
