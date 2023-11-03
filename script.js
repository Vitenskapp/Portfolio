function abrirDesc() {
    var skillBox = document.querySelector('div.skillsBoxHTML');
    skillBox.style.visibility = "visible";
    skillBox.style.width = "350px";
    skillBox.style.transition = "1s";
}

function fecharDesc() {
    var skillBox = document.querySelector('div.skillsBoxHTML');
    skillBox.style.visibility = "hidden";
    skillBox.style.width = "0px";
    skillBox.style.transition = "0.7s";
}

var html = document.querySelector('img.html5');
html.addEventListener('mouseenter', abrirDesc);
html.addEventListener('mouseleave', fecharDesc)


