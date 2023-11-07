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

var css = document.querySelector('img.css3');
css.addEventListener('mouseenter', abrirDescCSS);
css.addEventListener('mouseleave', fecharDescCSS);

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

var javasc = document.querySelector('img.javascript');
javasc.addEventListener('mouseenter', abrirDescJS);
javasc.addEventListener('mouseleave', fecharDescJS);

function abrirDescFIG() {
    var skillBox = document.querySelector('div.skillsBoxFIG');
    skillBox.style.visibility = "visible";
    skillBox.style.width = "350px";
    skillBox.style.transition = "1s";
    skillBox.style.position = "relative";
}

function fecharDescFIG() {
    var skillBox =  document.querySelector('div.skillsBoxFIG');
    skillBox.style.visibility = "hidden";
    skillBox.style.width = "0px";
    skillBox.style.transition = "0.7s";
    skillBox.style.position = "relative";
}

var figma = document.querySelector('img.figma');
figma.addEventListener('mouseenter', abrirDescFIG);
figma.addEventListener('mouseleave', fecharDescFIG);





