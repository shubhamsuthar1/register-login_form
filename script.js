let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');
let body = document.getElementById('body');




let sub = document.querySelector('.sub');
let form = document.querySelector('.form');


login.onclick = function() {
    container.classList.add('signinForm');
}

create.onclick = function() {
    container.classList.remove('signinForm');
}
// form.onclick = function() {
//     container.classList.add('signinForm');
// }

// create.onclick = function() {
//     container.classList.remove('signinForm');
// }