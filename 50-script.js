
// 51-login.html 
loginFunction = () => {
    if (document.getElementById("userName").value === "Sonu"
        && document.getElementById("password").value === "Sonu") {
        window.localStorage.setItem("user", document.getElementById("userName").value);
        window.location = "./52-welcome.html";
    }
    else {
        document.getElementById("credentials").innerHTML = "Invalid credentials!";
        window.localStorage.removeItem("user");
    }
}

// 52-welcome.html 
document.getElementById("credentials").innerHTML = window.localStorage.getItem("user");
window.localStorage.removeItem("user");



