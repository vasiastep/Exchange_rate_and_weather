export function dispalyExchangePage(){
    return `
        <h1 class="exchange-header">Currency converter</h1>

        <div class="exchange-text-wrapper">
            <p class="exchange-text">Enter the amount of currency(not required) you would like to convert. In "From" and "To" enter the currency in format "USD"</p>
        </div>

        <form class="exchange-form">
            <div class="floating floating-money">
                <input id="amount" class="floating__input floating__input_money" placeholder="Amount"/>
                <label for="city-name" class="floating__label" data-content="Amount">
            </div>
            <div class="floating floating-money">
                <input id="from_currency" class="floating__input floating__input_money" placeholder="From" required/>
                <label for="from_currency" class="floating__label" data-content="From">
            </div>
            <div class="right-arrow floating-money"> > </div>
            <div class="floating floating-money">
                <input id="to_currency" class="floating__input floating__input_money" placeholder="To" required/>
                <label for="to_currency" class="floating__label" data-content="To">
            </div>
            <button class="floating-money" id="get-exchange-btn"><span id="get-exchange-btn-text">Convert</span></button>
        </form>
        <div id="currency-list"></div>

    `
}

export function getCurrencyRate(){
    const appId = '226f49dd5818459c800920519749e2c4';

    return fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}&base=USD&prettyprint=false`)  
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
}

export function showAllCurrencies(list){
    const currencyList = document.getElementById('currency-list');

    const convertedCurrency = document.getElementById('to_currency').value;
    const numberValueOfBaseCurrency = +document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from_currency').value;


    if( (list.rates[`${convertedCurrency}`] && list.rates[`${fromCurrency}`]) != undefined){
        if(numberValueOfBaseCurrency) {
            currencyList.innerHTML = `
                <div>
                    ${numberValueOfBaseCurrency} ${fromCurrency} = 
                    ${(numberValueOfBaseCurrency * 
                        list.rates[`${convertedCurrency}`]/
                        list.rates[`${fromCurrency}`]).toFixed(2)} 
                        ${convertedCurrency}
                </div>`;
        } else {
            currencyList.innerHTML = `
                <p >
                    1 ${fromCurrency} = ${(list.rates[`${convertedCurrency}`]/
                        list.rates[`${fromCurrency}`]).toFixed(2)} 
                        ${convertedCurrency}
                </p><br>`;
            for (let elem in list.rates){
                currencyList.innerHTML += `
                    <p class="rest-currencies">
                        1 ${fromCurrency} =  ${(list.rates[`${elem}`] / 
                        list.rates[`${fromCurrency}`]).toFixed(2)} ${elem}
                    </p>`;
            }
        }
    } else {
        currencyList.innerHTML = '<p class="error">Can not find such currencies</p>';
    }
}