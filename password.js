const password = "exitanos"
let errorCtr = 4

function validtePw(pw) {
    if (pw.toLowerCase() === password.toLowerCase() && errorCtr >= 0) {
        return true;
    }
    errorCtr -= 1;
    return false;
}

function submitPw() {
    let pw = document.getElementById("password").value
    const valid = validtePw(pw)
    if (valid) {
        window.open("https://www.exitanos.de/unsere-r%C3%A4ume")
        document.getElementById("error").innerHTML = "Hurra! Geschafft!"
    }
    else {
        document.getElementById("error").innerHTML = errorCtr !== 1 ? `Falsch! Ihr habt noch ${errorCtr} Versuche!` : 'Falsch! Ihr habt noch einen Versuch!'
    }
}