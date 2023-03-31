var firebaseConfig = {
      apiKey: "AIzaSyDJqYK-mLwLlRsYn9L7BoikX9BchOpfjAQ",
      authDomain: "useless-kwitter.firebaseapp.com",
      databaseURL: "https://useless-kwitter-default-rtdb.firebaseio.com",
      projectId: "useless-kwitter",
      storageBucket: "useless-kwitter.appspot.com",
      messagingSenderId: "434803273306",
      appId: "1:434803273306:web:95414ef91ea424f2ecb263"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
      //End code
      });});}
getData();
