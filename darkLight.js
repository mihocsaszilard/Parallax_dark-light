//------------------background changer---------------/*
function darkLight() {
    var bg = document.body;
    bg.classList.toggle("dark-bg");

    var home = document.getElementById("home");
    home.classList.toggle("dark-home");

    var developer = document.getElementById("dev");
    developer.classList.toggle("dev-dark");
}
