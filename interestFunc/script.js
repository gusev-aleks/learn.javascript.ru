function checkUser(repeatOn = []) {
    var okPassword = "P";
    var okLogin = "L";
    // Login
    var login = prompt("Кто пришел?");
    while (repeatOn.includes("repeatOnIncorrectLogin") &&  login !== null && login !== okLogin) {
        login = prompt("Кто пришел?");
    }
    if (login === null) {
        return display("cancel");
    }
    if (login !== okLogin) {
        return display("no");
    }
    // End Login

    // Password
    var password = prompt("Пароль");
    while (repeatOn.includes("repeatOnIncorrectPassword") &&  password !== null && password !== okPassword) {
        password = prompt("Пароль");
    }
    if (password === null){
        return display("cancel");
    }
    if (password !== okPassword){
        return display("incorrectPassword");
    }
    if (password === okPassword ) {
        return display("ok");
    }
    // End Password
    return display("no");
}

function display(check) {
    if (check === "no") {
        console.log("Я вас не знаю");
    }
    if (check === "cancel") {
        console.log("Вход отменен");
    }
    if (check === "incorrectPassword"){
        console.log("Пароль не верный");
    }
    if (check === "ok") {
        console.log("Добро пожаловать" );
    }
}

checkUser(["repeatOnIncorrectPassword", "repeatOnIncorrectLogin"]);