//YOUR FIREBASE LINKS
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

  var room_name=localStorage.getItem("room_name");
  var username=localStorage.getItem("username");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name1+"<img class='user_tick' src=''></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" onclick='updateLike(this.id)' value="+like+">Like: "+like+"</button><hr>";
row=name_tag+message_tag+button_tag
document.getElementById("output").innerHTML=row;

//End code
 } });  }); }
getData();


function updateLike(message_id){
 button_id=message_id
 likes=document.getElementById(button_id).value;
 updated_likes=Number(likes)+1;
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like:updated_likes
 });
}