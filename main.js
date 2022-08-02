const input = require("sync-input");
console.log("Welcome to Currency Converter!");

const currencies = [{cur: `USD`, value: 1.0}, {cur: `JPY`, value: 113.5}, {cur: `EUR`, value: 0.89}, {
    cur: `RUB`,
    value: 74.36
}, {cur: `GBP`, value: 0.75},]

currencies.forEach(currency => {
    console.log(`1 USD equals ${currency.value} ${currency.cur}`)
})

let currencyNames = [];
for (const index in currencies) {
    const currencyName = currencies[index].cur;
    currencyNames.push(currencyName);
}

let isWorking = true;
while (isWorking) {
    console.log("What do you want to do?\n" +
        "1-Convert currencies 2-Exit program")
    let userDecision = input();
    switch (userDecision) {
        case "1":
            console.log("What do you want to convert?");

            userCurrencyFrom = input("From: ").toUpperCase();
            if (!currencyNames.includes(userCurrencyFrom)) {
                console.log("Unknown currency");
                break;
            }

            userCurrencyTo = input("To: ").toUpperCase();
            if (!currencyNames.includes(userCurrencyTo)) {
                console.log("Unknown currency");
                break;
            }


            let userCurrencyAmount = Number(input("Amount: "));


            if (! Number.isFinite(userCurrencyAmount)) {
                console.log("The amount has to be a number");
                break;
            }
            if (userCurrencyAmount < 0) {
                console.log("The amount cannot be less than 1");
                break;
            }


            let currencyFromValue;
            for (const index in currencies) {
                if (userCurrencyFrom === currencies[index].cur) {
                    currencyFromValue = currencies[index].value;
                }
            }

            let currencyToValue;
            for (const index in currencies) {
                if (userCurrencyTo === currencies[index].cur) {
                    currencyToValue = currencies[index].value;
                }
            }

            const result = (currencyToValue * userCurrencyAmount) / currencyFromValue

            console.log(`Result: ${userCurrencyAmount} ${userCurrencyFrom} equals ${result.toFixed(4)} ${userCurrencyTo}`);
            isWorking = true;
            break;

        case "2":
            console.log("Have a nice day!");
            isWorking = false;
            return;
        default:
            console.log("Unknown input");
            break;
    }
}