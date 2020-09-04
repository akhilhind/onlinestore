function fetchProductData() {
    var proName = document.querySelector("#productName").value;
    var proCatg = document.querySelector("#productType").value;
    var proPrice = document.querySelector("#productPrice").value;
    var proDisc = document.querySelector("#productDiscount").value;
    var proURL = document.querySelector("#productURL").value;
    console.log(proName,proCatg,proPrice,proDisc);
    var newPro = new newProduct(proName,proCatg,proPrice,proDisc,proURL);
    productControl.addDetails(newPro);
}

// document.addEventListener("DOMContentLoaded",begin);

// function begin() {
//     document.querySelector("#addNewProduct").addEventListener("click",fetchProductData);
// }


function goToHome() {
    window.location = "index.html";
}