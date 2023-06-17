var firebaseConfig = {
  apiKey: "AIzaSyDnkl-oO21Y8Bj1ikoUjXAE7Osy0YrFmvU",
  authDomain: "kwitter-b6947.firebaseapp.com",
  databaseURL: "https://kwitter-b6947-default-rtdb.firebaseio.com",
  projectId: "kwitter-b6947",
  storageBucket: "kwitter-b6947.appspot.com",
  messagingSenderId: "364743523889",
  appId: "1:364743523889:web:1f346c4306468d66969f10"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem("username");

document.getElementById("username").innerHTML="Welcome "+username+" !!";

function addroom(){
  room_name=document.getElementById("roomname").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
