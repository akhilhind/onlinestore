var config = {
    apiKey: "AIzaSyBKMIgXLOfiuk8n1CSZ_ytZKVAP2VSbtUU",
    authDomain: "puma-akhilhind.firebaseapp.com",
    databaseURL: "https://puma-akhilhind.firebaseio.com",
    projectId: "puma-akhilhind",
    storageBucket: "",
    messagingSenderId: "246842308968"
  };
  firebase.initializeApp(config);


  function setCookie(name) {
    console.log(name);
    localStorage.setItem("username",name);
    // localStorage.setId("userID",);
  }