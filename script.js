// let menuIcon = document.querySelector('#menu-icon')
// let nav = document.querySelector('.nav');
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     nav.classList.toggle('active')
// }

let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // icon change
    nav.classList.toggle('active');     // menu open/close
}
