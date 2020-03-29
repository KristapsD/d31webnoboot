
var modal = document.getElementById("myModal");

var btn = document.getElementById("buttonbuy");
var btn1 = document.getElementById("buttonbuy1");
var btn2 = document.getElementById("buttonbuy2");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");

menuIcon.addEventListener('click', function () {
    if(slideoutMenu.style.opacity == '1'){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
})