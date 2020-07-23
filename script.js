//IPHONE PLUS BUTTON HANDLER
document.getElementById("iPhonePlusBtn").addEventListener("click", function () {
    let iPhoneValue = document.getElementById("iPhoneValueBtn").value;
    iPhoneValue = parseInt(iPhoneValue);
    iPhoneValue = iPhoneValue + 1;
    document.getElementById("iPhoneValueBtn").value = iPhoneValue;

    let iPhonePrice = document.getElementById("iPhonePriceBtn").innerText;
    iPhonePrice = parseInt(iPhonePrice);
    iPhonePrice = iPhonePrice + 1219;
    document.getElementById("iPhonePriceBtn").innerText = iPhonePrice;

    let subTotal = document.getElementById("subTotalBtn").innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal + 1219;
    document.getElementById("subTotalBtn").innerText = subTotal;

    let total = document.getElementById("totalBtn").innerText;
    total = parseInt(total);
    total = total + 1219;
    document.getElementById("totalBtn").innerText = total;
})

//IPHONE MINUS BUTTON HANDLER
document.getElementById("iPhoneMinusBtn").addEventListener("click", function () {
    let iPhoneValue = document.getElementById("iPhoneValueBtn").value;
    iPhoneValue = parseInt(iPhoneValue);
    iPhoneValue = iPhoneValue - 1;
    document.getElementById("iPhoneValueBtn").value = iPhoneValue;

    let iPhonePrice = document.getElementById("iPhonePriceBtn").innerText;
    iPhonePrice = parseInt(iPhonePrice);
    iPhonePrice = iPhonePrice - 1219;
    document.getElementById("iPhonePriceBtn").innerText = iPhonePrice;

    let subTotal = document.getElementById("subTotalBtn").innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal - 1219;
    document.getElementById("subTotalBtn").innerText = subTotal;

    let total = document.getElementById("totalBtn").innerText;
    total = parseInt(total);
    total = total - 1219;
    document.getElementById("totalBtn").innerText = total;
})

//CASE PLUS BUTTON HANDLER
document.getElementById("casePlusBtn").addEventListener("click", function () {
    let caseValue = document.getElementById("caseValueBtn").value;
    caseValue = parseInt(caseValue);
    caseValue = caseValue + 1;
    document.getElementById("caseValueBtn").value = caseValue;

    let casePriceBtn = document.getElementById("casePriceBtn").innerText;
    casePriceBtn = parseInt(casePriceBtn);
    casePriceBtn = casePriceBtn + 59;
    document.getElementById("casePriceBtn").innerText = casePriceBtn;

    let subTotal = document.getElementById("subTotalBtn").innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal + 59;
    document.getElementById("subTotalBtn").innerText = subTotal;

    let total = document.getElementById("totalBtn").innerText;
    total = parseInt(total);
    total = total + 59;
    document.getElementById("totalBtn").innerText = total;
})
//CASE MINUS BUTTON HANDLER
document.getElementById("caseMinusBtn").addEventListener("click", function () {
    let caseValue = document.getElementById("caseValueBtn").value;
    caseValue = parseInt(caseValue);
    caseValue = caseValue - 1;
    document.getElementById("caseValueBtn").value = caseValue;

    let casePriceBtn = document.getElementById("casePriceBtn").innerText;
    casePriceBtn = parseInt(casePriceBtn);
    casePriceBtn = casePriceBtn - 59;
    document.getElementById("casePriceBtn").innerText = casePriceBtn;

    let subTotal = document.getElementById("subTotalBtn").innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal - 59;
    document.getElementById("subTotalBtn").innerText = subTotal;

    let total = document.getElementById("totalBtn").innerText;
    total = parseInt(total);
    total = total - 59;
    document.getElementById("totalBtn").innerText = total;
})