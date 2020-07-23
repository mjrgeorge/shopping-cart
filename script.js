//IPHONE PLUS BUTTON HANDLER
document.getElementById("iPhonePlusBtn").addEventListener("click", function () {
    quantityPlus("iPhoneValueBtn");

    plus("iPhonePriceBtn", 1219);

    plus("subTotalBtn", 1219);

    plus("totalBtn", 1219);
})

//IPHONE MINUS BUTTON HANDLER
document.getElementById("iPhoneMinusBtn").addEventListener("click", function () {
    quantityMinus("iPhoneValueBtn");

    minus("iPhonePriceBtn", 1219);

    minus("subTotalBtn", 1219);

    minus("totalBtn", 1219);
})

//CASE PLUS BUTTON HANDLER
document.getElementById("casePlusBtn").addEventListener("click", function () {

    quantityPlus("caseValueBtn");

    plus("casePriceBtn", 59);

    plus("subTotalBtn", 59);

    plus("totalBtn", 59);
})

//CASE MINUS BUTTON HANDLER
document.getElementById("caseMinusBtn").addEventListener("click", function () {
    quantityMinus("caseValueBtn");

    minus("casePriceBtn", 59);

    minus("subTotalBtn", 59);

    minus("totalBtn", 59);
})

//FUNCTION
function quantityPlus(id) {
    let productQuantity = document.getElementById(id).value;
    productQuantity = parseInt(productQuantity);
    productQuantity = productQuantity + 1;
    document.getElementById(id).value = productQuantity;
    return productQuantity;
}

function quantityMinus(id) {
    let productQuantity = document.getElementById(id).value;
    productQuantity = parseInt(productQuantity);
    productQuantity = productQuantity - 1;
    document.getElementById(id).value = productQuantity;
    return productQuantity;
}

function plus(id, num) {
    let price = document.getElementById(id).innerText;
    price = parseInt(price);
    price = price + num;
    document.getElementById(id).innerText = price;
    return price;
}

function minus(id, num) {
    let price = document.getElementById(id).innerText;
    price = parseInt(price);
    price = price - num;
    document.getElementById(id).innerText = price;
    return price;
}