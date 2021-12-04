
// 51-login.html 
const loginFunction = () => {
    window.localStorage.setItem("user", document.getElementById("userName").value);
    if (document.getElementById("userName").value === "vaman"
        && document.getElementById("password").value === "vaman") {
        window.location = "./52-welcome.html";
    }
    else {
        console.log("invalid credentials");
    }
}


// 52-welcome.html 
document.getElementById("welcomeUserName").innerHTML =
    window.localStorage.getItem("user");

