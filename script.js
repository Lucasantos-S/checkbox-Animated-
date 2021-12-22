const btn = document.querySelector('.btn')
const backgroundBlack = document.querySelector('.bg')
const moon = document.querySelector('.icon-moon')
const title= document.querySelector('.title')

function templateBlack () {
    backgroundBlack.classList.toggle('active')
    moon.classList.toggle('active')
    title.classList.toggle('active')
    btn.classList.toggle('active')
}


btn.addEventListener('click', templateBlack)