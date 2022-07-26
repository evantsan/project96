username = localStorage.getItem("username");
document.getElementById('usernam').innerHTML = username;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsCoZP2JSdicVBAyHyM6hcQo1wC3gKvwg",
  authDomain: "letschatwebapp-cbb53.firebaseapp.com",
  databaseURL: "https://letschatwebapp-cbb53-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-cbb53",
  storageBucket: "letschatwebapp-cbb53.appspot.com",
  messagingSenderId: "892548338122",
  appId: "1:892548338122:web:60aa67c829263538ce3f33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room = document.getElementById('roomname').value;
    firebase.database().ref("/").child(room).update({
        purpose:'addroom'
    });
    localStorage.setItem("roomname",room);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Names : "+ Room_names);
r = "<div id="+Room_names+" onclick='redirect(this.id)'>Room - "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += r;
//End code
});});}
getData();
function redirect(name)
{
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}