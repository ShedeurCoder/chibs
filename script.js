scrollFunction()
function id(id) {
    return document.getElementById(id)
}
function toggleNav() {
    id('links').classList.toggle("shown");
    if (id('links').classList.contains('shown')) {
        id('overlay').style.position = 'fixed'
        id('overlay').style.bottom = '0'
    } else {
        id('overlay').style.position = 'static'
    }
}
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        document.getElementById("navbar").style.padding = "0 1em";
        document.getElementById("logo").style.fontSize = "1.3rem";
        document.getElementById('logoImg').style.width = '150px';
    } else {
        document.getElementById("navbar").style.padding = "1em";
        document.getElementById("logo").style.fontSize = "1.5rem";
        if (window.innerWidth >= 1000) {
            document.getElementById('logoImg').style.width = '300px';
        } else {
            document.getElementById('logoImg').style.width = '200px';
        }
    }
}