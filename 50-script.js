
// 51-login.html 

const loginFunction = () => {
    window.localStorage.setItem("user", document.getElementById("userName").value);
    console.log("loginFunction");
}


document.getElementById("welcomeUserName").innerHTML = 
window.localStorage.getItem("user");

// 52-welcome.html 