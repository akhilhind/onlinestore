class newAdmin {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
}

class newUser {
    constructor(name,pass,email,dob,address) {
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.dob = dob;
        this.add = address;
    }
}

class newProduct {
    constructor(name, category, price, discount, imgurl) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.url = imgurl;
    }
}

class ourUser {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }
}