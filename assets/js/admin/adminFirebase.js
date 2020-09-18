const adminControl = {
    addDetails(newAdmin) {
        var date = new Date();
        var time = date.getTime();
        var time2 = time;
        var pro = new Promise((resolve,reject)=> {
            firebase.database().ref('adminAcc/'+newAdmin.name+time).set(newAdmin,done);
            resolve(console.log("job done"));            
        })
        function done() {
            setCookie(newAdmin.name);
            var adminRef = firebase.database().ref('adminAcc/'+newAdmin.name+time2);
            console.log(adminRef);
            adminRef.on('value',(snapshot)=> {
                console.log("snapshot is",snapshot);
                var object = snapshot.val();
                console.log("Object is ",object);
                for(let key in object) {
                    console.log(object[key]);
                    var obj = object[key];
                    for(let k in obj) {
                        console.log(obj[k]);
                    }
                }
            })
            window.location.href = "addProduct.html";
            
            // console.log(adminRef.name);
            console.log("Inside resolve");
        }
    },
    checkAdmin(user) {
        console.log("user object is",user);
        console.log("Login data - user name- ",user.email)
        var adminRef = firebase.database().ref('adminAcc/');
        adminRef.on('value',(snapshot)=> {
            console.log("snapshot is",snapshot);
            var object = snapshot.val();
            console.log("Object is ",object);
            for(let key in object) {
                // if (key.email === user.email) {
                //     if (key.pass === user.pass) {
                //         console.log("User Found!");
                //     }
                //     else  {}
                // }
                console.log(key);
                var obj = object[key];
                console.log(obj.email);

                if(user.email == obj.email) {
                    if(user.pass == obj.pass) {
                        console.log("Login Successful! as admin");
                        localStorage.username = obj.name;
                        userWelcome(obj.name);
                        
                    }
                }
            }
        })
    }
}