function fetchProducts() {
    var parDiv = document.querySelector("#newItems");
    var productRef = firebase.database().ref('products/');
    // var ul = document.createElement("ul");
    // ul.className = "childUL";    
    // console.log(productRef);
    
    productRef.on('value',(newValue)=> {
        // console.log("newValue is",newValue);
        
        var object = newValue.val();
        
        // console.log("Object is ",object);
        
        for(let key in object) {
            // console.log(object[key]);
            var obj = object[key];

            //create elements and add classes to them
            var product = document.createElement("div");
            product.className = "product";

            var productImage = document.createElement("div");
            productImage.className = "productImage"
            
            product.appendChild(productImage);
            
            var img = document.createElement("img");
            img.setAttribute("src", obj.url);
            productImage.appendChild(img);

            var sellDetails = document.createElement("div");
            sellDetails.classList = "sellDetails";
            product.appendChild(sellDetails);
            
            var head = document.createElement("h2");
            head.classList = "productName";
            head.innerHTML =  obj.name;

            // function getRandomColor() {
            //     var letters = '0123456789ABCDEF';
            //     var color = '#';
            //     for (var i = 0; i < 6; i++) {
            //       color += letters[Math.floor(Math.random() * 16)];
            //     }
            //     return color;
            // }

            // var color = getRandomColor();
            // // console.log(color);
            // head.style.color = color;
            sellDetails.appendChild(head);


            var price = document.createElement("span");
            price.classList = "proPrice";
            price.innerHTML = "$" + obj.price;
            sellDetails.appendChild(price);

            var discount = document.createElement("span");
            discount.classList = "proDiscount";
            discount.innerHTML = obj.discount + "% off";
            sellDetails.appendChild(discount);

            parDiv.appendChild(product);

            // var catg = obj.category;
            // console.log(catg);

            // var li = document.createElement("li");
            // li.className = "childLI";
            // li.innerHTML = obj.name;
            // ul.appendChild(li);

            // if (catg == "men") {
            //     var parUL = document.querySelector("#catMen");
            //     parUL.appendChild("li");
            // }
            // else if (catg == "women") {
            //     var parUL = document.querySelector("#catMen");
            //     parUL.appendChild("li");
            // }
            // else if (catg == "electronics") {
            //     var parUL = document.querySelector("#catElectronics");
            //     parUL.appendChild("ul");
            // }
            // else if (catg == "kids") {
            //     var parUL = document.querySelector("#catKid");
            //     parUL.appendChild("li");
            // }
            // else if (catg == "sports") {
            //     var parUL = document.querySelector("#catSports");
            //     parUL.appendChild("li");
            // }
            
            


            
            // console.log(product);
            
            // console.log(object[key].name);
        }
    })
}

document.addEventListener("DOMContentLoaded",begin);


function begin() {
    document.querySelector("#signUpClick").addEventListener("click",show);
    document.querySelector("#adminSignUp").addEventListener("click",showAdmin);
    document.querySelector("#userSignUp").addEventListener("click",showUser);
    document.querySelector("#cross").addEventListener("click",closePop);

    fetchProducts();
    
    document.querySelector("#adminSubmit").addEventListener("click",fetchAdminData);
    document.querySelector("#userSubmit").addEventListener("click",fetchUserData);
    document.querySelector("#loginSubmit").addEventListener("click",loginData);
    document.querySelector("#logOption").addEventListener("click",toggleUpIn);
    document.querySelector("#signOption").addEventListener("click",toggleInUp);
    document.querySelector("#userCart").addEventListener("click",userCart);
}


function toggleUpIn() {
    var log = document.querySelector("#LogIn");
    var hide = document.querySelector(".signOption");
    var show = document.querySelector("#signOption");
    var head = document.querySelector("#signUpHead");
    head.style.display = "none";
    hide.style.display = "none";
    log.style.display = "block";
    show.style.display = "block";
    this.style.display = "none";    
}

function toggleInUp() {
    var log = document.querySelector("#LogIn");
    var show = document.querySelector(".signOption");
    var head = document.querySelector("#signUpHead");
    var login = document.querySelector("#logOption");
    show.style.display = "block";
    login.style.display = "block";
    log.style.display = "none";
    head.style.display = "block";
    this.style.display = "none";    
}

function userCart() {
    if (localStorage.username === undefined || localStorage.username === "") {
        show();
    }
}

function addScroll() {
    // var div = document.querySelector("")
}

function closePop() {
    var blur = document.querySelector(".blur");
    blur.style.display = "none";

    var show = document.querySelector("#signUp");
    show.style.display = "none";
}

function show() {
    // var body = document.querySelector("body");
    // console.log(body);
    // var notblur = document.querySelector("#signUp");
    // if (body.className == "") {
    //     body.className+="filterBlur";
    // }
    // else {
    //     body.className = "";
    // }

    var blur = document.querySelector(".blur");
    blur.style.display = "block";
    
    var show = document.querySelector("#signUp");
    console.log("inside show");
    if (show.style.display === "none") { 
        show.style.display = "block";
        console.log("show called");
    } else {
        show.style.display = "none";
        console.log("not show");
    }
    var modal = document.querySelector("#signUp");
    window.onclick = function(event) {
        if(event.target == HTMLBodyElement) {
            modal.style.display = "none";
        }
    }
}

function showAdmin() {
    var user = document.querySelector("#userSignUp");
    user.style.backgroundColor = "rgba(255, 255, 255,0.9)";
    user.style.color = "#000";

    var admin = document.querySelector("#adminSignUp");
    admin.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    admin.style.color = "#fff";
    
    var userForm = document.querySelector("#signUpForm2");
    userForm.style.display = "none";
    
    var adminForm = document.querySelector("#signUpForm");
    adminForm.style.display = "block";
}

function showUser() {
    var admin = document.querySelector("#adminSignUp");
    admin.style.backgroundColor = "rgba(255, 255, 255,0.9)";
    admin.style.color = "#000";

    var user = document.querySelector("#userSignUp");
    user.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    user.style.color = "#fff";
    
    var adminForm = document.querySelector("#signUpForm");
    adminForm.style.display = "none";
    
    var userForm = document.querySelector("#signUpForm2");
    userForm.style.display = "block";
}

function showForm() {
    document.querySelector("#signUpForm").style.display = "block";
    var btns = document.querySelectorAll(".ctdsign");
    this.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    this.style.color = "#fff";
}

function fetchAdminData() {
    var adminName = document.querySelector("#adminfName").value;
    var adminEmail = document.querySelector("#adminEmail").value;
    var adminPass = document.querySelector("#adminPass").value;
    var adminPassConf = document.querySelector("#adminPassConf").value;
    console.log(adminName,adminEmail,adminPass,adminPassConf);
    var newAdminData = new newAdmin(adminName,adminEmail,adminPass);
    adminControl.addDetails(newAdminData);
}

function fetchUserData() {
    var userName = document.querySelector("#userfName").value;
    var userPass = document.querySelector("#userPass").value;
    var userEmail = document.querySelector("#userEmail").value;
    var userPassConf = document.querySelector("#userPassConf").value;
    var userDOB = document.querySelector("#userDOB").value;
    var userAdd = document.querySelector("#userAddress").value;
    console.log(userName,userEmail,userPass,userPassConf);
    var newUserData = new newUser(userName,userPass,userEmail,userDOB,userAdd);
    userControl.addDetails(newUserData);
}

function loginData() {
    var email = document.querySelector("#loginEmail").value;
    var pass = document.querySelector("#loginPass").value;
    var user = new ourUser(email,pass);
    console.log(email,pass);
    adminControl.checkAdmin(user);
    userControl.checkUser(user);
}

function userWelcome(name) {
    var elem = document.querySelector("#userAccount");
    elem.innerHTML = "Hi " + name + "!";
    closePop();

    var elem = document.querySelector(".rightHead");
    elem.style.width = "28%";

    var par = document.querySelector(".rightMaster");
    var outButton = document.createElement("li");
    outButton.id = "logOut";
    outButton.innerHTML = "Logout";
    par.appendChild(outButton);
    document.querySelector("#logOut").addEventListener("click",logOut);
}

function logOut() {
    localStorage.username = "";
    window.location = "index.html";

    var par = document.querySelector(".rightMaster");
    var child = document.querySelector("#logOut");
    par.removeChild(child);
    
    var elem = document.querySelector(".rightHead");
    elem.style.width = "24%";

}