let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
    window.onscroll= function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 3 + 'px';
    mountains4.style.top = value * 3 + 'px';
    river.style.top = value * 3 + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if (scrollY >= 49){
        nouvil.style.fontSize = 49 + 'px';
        if (scrollY >= 147){
            document.querySelector('.main').style.background = 'linear-gradient(#4439e3,transparent)'
        }
        else {
            document.querySelector('.main').style.background = 'linear-gradient(to top ,#200016,transparent)'
        }
    }
}