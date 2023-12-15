
const BTNMENU = document.getElementById('btnMenu');
const MENU = document.getElementById('menu');


let MENUVISIBLE = false;


BTNMENU.addEventListener('click', function () {
  if (!MENUVISIBLE) {
    menu.style.display = 'block';
    MENUVISIBLE = true;
  } else {
    menu.style.display = 'none';
    MENUVISIBLE = false;
  }
});