document.addEventListener("DOMContentLoaded", begin);

function begin() {
    var name = window.localStorage.username;
    console.log(name);
    document.querySelector("#adminName").innerHTML += name;

    document.querySelector("#addNewProduct").addEventListener("click", fetchProductData);
    document.querySelector("#nextPage").addEventListener("click", goToHome);
}

function goToHome() {
    window.location = "index.html";
}