// Author: @Daniel4-scratch

var pageHash = window.location.hash;
pageHash = pageHash.replace("#", "");

function login(token) {
    setInterval(() => {
        document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
        location.reload();
    }, 2500);
}


if (pageHash == "tokenlogin"){
    try{
    var token = prompt("Enter your token");
    login(token);
    window.location.href = "https://discord.com/app";
    }catch(err){
        alert("An error occured during the login process. Please try again.");
        console.alert("Discord Token Login Error: " + err);
    }

}