var firebaseConfig = {
    apiKey: "AIzaSyDsCoZP2JSdicVBAyHyM6hcQo1wC3gKvwg",
    authDomain: "letschatwebapp-cbb53.firebaseapp.com",
    databaseURL: "https://letschatwebapp-cbb53-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-cbb53",
    storageBucket: "letschatwebapp-cbb53.appspot.com",
    messagingSenderId: "892548338122",
    appId: "1:892548338122:web:60aa67c829263538ce3f33"
};
firebase.initializeApp(firebaseConfig);
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
function sends() 
{
    roomn = localStorage.getItem("roomname");
    usern = localStorage.getItem("username");
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomn).push({
          uname: usern,
          umessage: msg,
          like: 0
    })
    document.getElementById("msg").value = "";
}