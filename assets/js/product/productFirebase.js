const productControl = {
    addDetails(newProduct) {
        var date = new Date();
        var time = date.getTime();
        var time2 = time;
        var pro = new Promise((resolve,reject)=> {
            firebase.database().ref('products/'+newProduct.name+time).set(newProduct,done);
            resolve();          
        })

        function done() {
            // setCookie(newAdmin.name);
            var productRef = firebase.database().ref('products/'+newProduct.name+time2);
            console.log(productRef);
            productRef.on('value',(snapshot)=> {
                console.log("snapshot is",snapshot);
                var object = snapshot.val();
                console.log("Object is ",object);
                for(let key in object) {
                    // console.log(object[key]);
                    var obj = object[key];
                    for(let k in obj) {
                        console.log(obj[k]);
                    }
                }
            })
            // window.location.href = "addProduct.html";
            
            // console.log(adminRef.name);
            console.log("Inside resolve");
        }
    }
}