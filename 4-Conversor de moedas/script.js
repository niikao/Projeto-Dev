const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras Moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.8
    const bitcoin = 208.1

    // Se o select estiver selecionado o valor de dolar, entre aqui
    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoin)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img"); // Substitua "idDoSeuElementoDeImagem" pelo ID real do seu elemento de imagem

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "DÃ³lar americano"
        currencyImage.src = "/Conversor de moedas/assets/Dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "/Conversor de moedas/assets/Euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "/Conversor de moedas/assets/Libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImage.src = "/Conversor de moedas/assets/Bitcoin.png"
    } 

    convertValues()
}

//currencySelect.addEventListener("change", changeCurrency)
//convertButton.addEventListener("click", convertValues)