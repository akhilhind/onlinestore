document.addEventListener("DOMContentLoaded",begin);

function begin() {

    var name = window.localStorage.username;
    console.log(name);
    document.querySelector("#adminName").innerHTML+=name;

    document.querySelector("#addNewProduct").addEventListener("click",fetchProductData);
    document.querySelector("#reset").addEventListener("click",reset);
    document.querySelector("#nextPage").addEventListener("click",goToHome);
}

function reset() {
    // document.querySelector("#productName").value = "e.g vaccum cleaner";
    // document.querySelector("#productType").value = selected;
    // document.querySelector("#productPrice").value = "e.g ₹5,000";
    // document.querySelector("#productDiscount").value = "e.g 5%,6%";
    // document.querySelector("#productURL").value = "e.g http://image.com";
    window.location = "addProduct.html";
}

function goToHome() {
    window.location = "index.html";
}