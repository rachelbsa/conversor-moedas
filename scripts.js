const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-convert")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value //dentro dos parênteses ficam as classes - valor que a pessoa digitar no input//
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real//
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas//

    console.log(currencySelect.value)
    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 10.00
    const bitcoinToday = 1000.00

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("eu-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)   
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("eu-UK", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("eu-US", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)  
    }

   
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    


}   



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
}
if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}
if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/libra.png"
}
if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
}

convertValues(
    

)

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)    
   
