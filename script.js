console.log('Javascript conectado!')

const header = document.querySelector('#header')

window.addEventListener('scroll', function() {
  if (window.scrollY > 80) {   
     header.classList.add ('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
} )