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
        //clear = true
        //window.open("https://www.exitanos.de/unsere-r%C3%A4ume")
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementsByTagName("body")[0].innerHTML = ""

        const lastTag = document.createElement("h2")
        lastTag.classList.add('heading')
        lastTag.innerHTML = "Hurra! Geschafft!";

        const text = document.createElement("p")
        text.innerHTML = "Geschafft! Terminbuchung im Escaperoom Exitanos am 27.12 um 17:00 Uhr. Tischreservierung im Gasthaus Adler um 18:00 Uhr."
        text.classList.add('end-text')

        lastTag.classList.add('heading')
        lastTag.innerHTML = "Hurra! Geschafft!";

        const div = document.createElement("div")
        div.style = "height: 100vh"

        var a = document.createElement('a');
        var linkText = document.createTextNode("Exitanos");
        a.appendChild(linkText);
        a.title = "Link zu Exitanos";
        a.href = "https://www.exitanos.de/unsere-r%C3%A4ume";
        a.classList.add('link-text')

        //document.body.appendChild(lastTag);
        document.body.appendChild(text);
        document.body.appendChild(a);
        document.body.appendChild(div);

        setTimeout(() => { window.open("https://www.exitanos.de/unsere-r%C3%A4ume") }, 20000)
    }
    else {
        document.getElementById("error").innerHTML = errorCtr !== 1 ? `Falsch! Ihr habt noch ${errorCtr} Versuche!` : 'Falsch! Ihr habt noch einen Versuch!'
    }
}