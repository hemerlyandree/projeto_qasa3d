console.log('Javascript conectado!')

const header = document.querySelector('#header')

window.addEventListener('scroll', function() {
  if (window.scrollY > 80) {   
     header.classList.add ('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
} )

const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

  menuToggle.addEventListener('click',function() {
    navLinks.classList.toggle('aberto')
  })

   const elements = document.querySelectorAll('.reveal')

   const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add ('visivel')
      }
    })
   }, {threshold: 0.1} )

   elements.forEach (function(el) {
    observer.observe(el)
   })