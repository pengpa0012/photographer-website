

// Nav Toggler
const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('.front .wrapper header nav ul')
navBurger.addEventListener('click', toggler)

function toggler(){
    navContent.classList.toggle('active')
}

const navList = document.querySelectorAll('.front .wrapper header nav ul li')

navList.forEach(li => {

    li.addEventListener('click', () => {
        navContent.classList.remove('active')
    })
})