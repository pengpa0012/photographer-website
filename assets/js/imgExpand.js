
const allImg = document.querySelectorAll('.gallery img')
const imgExpand = document.querySelector('.image-expand')
const overlay = document.querySelector('.overlay')

allImg.forEach(img => {
  img.addEventListener('click', () =>{     
    imgExpand.src = img.src
    imgExpand.classList.add('active')
    overlay.classList.add('active')
  })
})

overlay.addEventListener('click', () => {
    imgExpand.classList.remove('active')
    overlay.classList.remove('active')
})
