function abrirDescHTML() {
    var skillBox = document.querySelector('div.skillsBoxHTML');
    skillBox.style.visibility = "visible";
    skillBox.style.width = "350px";
    skillBox.style.transition = "1s";
    skillBox.style.position = "relative";
}

function fecharDescHTML() {
    var skillBox = document.querySelector('div.skillsBoxHTML');
    skillBox.style.visibility = "hidden";
    skillBox.style.width = "0px";
    skillBox.style.transition = "0.7s";
    skillBox.style.position = "absolute";
}

var html = document.querySelector('img.html5');
html.addEventListener('mouseenter', abrirDescHTML);
html.addEventListener('mouseleave', fecharDescHTML);



function abrirDescCSS() {
    var skillBox = document.querySelector('div.skillsBoxCSS');
    skillBox.style.visibility = "visible";
    skillBox.style.width = "350px";
    skillBox.style.transition = "1s";
    skillBox.style.position = "relative";
}

function fecharDescCSS() {
    var skillBox = document.querySelector('div.skillsBoxCSS');
    skillBox.style.visibility = "hidden";
    skillBox.style.width = "0px";
    skillBox.style.transition = "0.7s";
    skillBox.style.position = "absolute";
}

var html = document.querySelector('img.css3');
html.addEventListener('mouseenter', abrirDescCSS);
html.addEventListener('mouseleave', fecharDescCSS);



function abrirDescJS() {
    var skillBox = document.querySelector('div.skillsBoxJS');
    skillBox.style.visibility = "visible";
    skillBox.style.width = "350px";
    skillBox.style.transition = "1s";
    skillBox.style.position = "relative";
}

function fecharDescJS() {
    var skillBox = document.querySelector('div.skillsBoxJS');
    skillBox.style.visibility = "hidden";
    skillBox.style.width = "0px";
    skillBox.style.transition = "0.7s";
    skillBox.style.position = "absolute";
}

var html = document.querySelector('img.javascript');
html.addEventListener('mouseenter', abrirDescJS);
html.addEventListener('mouseleave', fecharDescJS);





