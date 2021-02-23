
document.getElementById("dataEntreprise").hidden = true

document.getElementById("ent")
    .addEventListener("click", function() {
        document.getElementById("dataEntreprise").hidden = false;
    }, true);

document.getElementById("part")
    .addEventListener("click", function() {
        document.getElementById("dataEntreprise").hidden = true;
    }, false);

let alerte = document.getElementById("alert").hidden = true

function validNom() {
    let nom = document.getElementById("name").value;
    if (nom == "") {
        /*alert("Il manque votre nom");
        return false;*/
        document.getElementById("alert").hidden = false;
        document.getElementById("name").style.border = 'solid red 2px';
    }
}

function validPrenom() {
    let prenom = document.getElementById("prenom").value;
    if (prenom == "") {
        /*alert("Il manque votre prénom");
        return false;*/
        document.getElementById("alert").hidden = false;
        document.getElementById("prenom").style.border = 'solid red 2px';

    }
}

function validMail() {
    let mail = document.getElementById("mail").value;
    if (mail == "") {
        /*alert("Il manque votre mail");
        return false*/
        document.getElementById("alert").hidden = false;
        document.getElementById("mail").style.border = 'solid red 2px';
    }
}

function validMsg(){
    let  msg = document.getElementById("msg").value;
    if(msg ==  ""){
        document.getElementById("alert").hidden = false;
        document.getElementById("msg").style.border = 'solid red 2px';
    }
}
document.getElementById("submit")
    .addEventListener("click", function(event) {
        event.preventDefault();
        validNom()
        validPrenom()
        validMail()
        validMsg()

    })