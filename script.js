
function productHandler(isIncrement, product) {

    let productQuantity = document.getElementById(product + '_quantity');
    let quantityValue = parseInt(productQuantity.value);
    let currentQuantity = quantityValue;
    if (isIncrement == true) {
        currentQuantity++;
    }
    if (isIncrement == false && currentQuantity > 0) {
        currentQuantity--;
    }
    productQuantity.value = currentQuantity;

    let productPrice = document.getElementById(product + '_price');
    let productTotalPrice;
    if (product == 'phone') {
        productTotalPrice = currentQuantity * 1219;
    }
    if (product == 'case') {
        productTotalPrice = currentQuantity * 59;
    }
    productPrice.innerText = '$' + productTotalPrice;
    totalCalculation();
};

function totalCalculation() {
    let phoneQuantity = document.getElementById('phone_quantity');
    let phoneQuantityValue = parseInt(phoneQuantity.value) * 1219;

    let caseQuantity = document.getElementById('case_quantity');
    let caseQuantityValue = parseInt(caseQuantity.value) * 59;

    let subTotal = phoneQuantityValue + caseQuantityValue;
    document.getElementById('sub_total').innerText = '$' + subTotal;

    let tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = '$' + tax;

    let total = subTotal + tax;
    document.getElementById('total').innerText = '$' + total;

}

function checkOut(){
    document.getElementById('main_section').style.display = 'none';
    document.getElementById('process_page').style.display = 'block';
}


















// document.getElementById('phone_increment').addEventListener('click', function () {
//     productHandler(true, 'phone');
// });

// document.getElementById('phone_decrement').addEventListener('click', function () {
//     productHandler(false, 'phone');
// });

// document.getElementById('case_increment').addEventListener('click', function () {
//     productHandler(true, 'case');
// });
// document.getElementById('case_decrement').addEventListener('click', function () {
//     productHandler(false, 'case');
// });

// function productHandler(isIncrement, product) {

//     let productQuantity = document.getElementById(product + '_quantity');
//     let quantityValue = parseInt(productQuantity.value);
//     let currentQuantity = quantityValue;
//     if (isIncrement == true) {
//         currentQuantity++;
//     }
//     if (isIncrement == false && currentQuantity > 0) {
//         currentQuantity--;
//     }
//     productQuantity.value = currentQuantity;
//     let productPrice = document.getElementById(product + '_price');
//     let productTotalPrice;
//     if (product == 'phone') {
//         productTotalPrice = currentQuantity * 1219;
//     }
//     if (product == 'case') {
//         productTotalPrice = currentQuantity * 59;
//     }

//     productPrice.innerText = productTotalPrice;
// }