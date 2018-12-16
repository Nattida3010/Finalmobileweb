
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAJIRibfhC67xSdhSJNEgSjah7b1qsEG28",
    authDomain: "psuproject-e92e0.firebaseapp.com"
  
};
firebase.initializeApp(config);

$("#login").click(function () {
    var user = $("#username").val();
    var pass = $("#password").val();
    console.log(user);
    console.log(pass);
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code + ':' + error.message);
        //ons.notification.alert("Login failed!!!!! ");
        alert("Login failed!!!!! ");    
    });

});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        window.location.href = 'home.html';
        // ...
    }
});




