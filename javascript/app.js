
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyAbpDy9F-P8fSOy8vDU0RK9e-mUWAYVAlg",
    authDomain: "portfolio-f5bc6.firebaseapp.com",
    databaseURL: "https://portfolio-f5bc6.firebaseio.com",
    projectId: "portfolio-f5bc6",
    storageBucket: "portfolio-f5bc6.appspot.com",
    messagingSenderId: "989816450210"
  };
  firebase.initializeApp(config);
  let database = firebase.database();
  $("#msg").on('click', function(){
      event.preventDefault();
      let name = $("#input1").val().trim();
      let email = $("#input2").val().trim();
      let msg = $("#textArea1").val().trim();

    let newForm = {
        newName: name,
        newEmail: email,
        newMsg: msg,
    };
    database.ref().push(newForm);
    console.log(newForm.name);
    console.log(newForm.email);
    console.log(newForm.msg);

    alert("Successfully Submitted, Thank You");
    $('#input1').val("");
    $('#input2').val("");
    $('#textArea1').val("");
  });
  database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
    var name = childSnapshot.val().newName;
    var email = childSnapshot.val().newEmail;
    var msg = childSnapshot.val().newMsg;
  });