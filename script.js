console.log('Javascript conectado!')

const header = document.querySelector('#header')

let ultimoScroll = 0

window.addEventListener('scroll', function() {
  const scrollAtual = window.scrollY

  if (scrollAtual > 80) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }

  if (scrollAtual > ultimoScroll && scrollAtual > 80) {
    header.classList.add('escondido')
  } else {
    header.classList.remove('escondido')
  }

  ultimoScroll = scrollAtual
})

const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('aberto')
})

const elements = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel')
    }
  })
}, { threshold: 0.1 })

elements.forEach(function(el) {
  observer.observe(el)
})

// Slideshow - Hero
const vendas = document.querySelector('#vendas')

const wallpapers = [
  'assets/img-projeto/projeto1.jpeg',
  'assets/img-projeto/projeto2.jpeg',
  'assets/img-projeto/projeto3.jpeg',
  'assets/img-projeto/projeto4.jpeg',
  'assets/img-projeto/projeto5.jpeg'
]

let indiceAtual = 0

function trocarWallpaper() {
  const proximoIndice = (indiceAtual + 1) % wallpapers.length

  const img = new Image()
  img.src = wallpapers[proximoIndice]

  function realizarTroca() {
    vendas.classList.add('transitando')

    setTimeout(function() {
      indiceAtual = proximoIndice
      vendas.style.backgroundImage = `url('${wallpapers[indiceAtual]}')`
      vendas.style.backgroundSize = 'cover'
      vendas.style.backgroundPosition = 'center'
      vendas.classList.remove('transitando')
    }, 500)
  }

  if (img.complete) {
    realizarTroca()
  } else {
    img.onload = realizarTroca
  }
}

vendas.style.backgroundImage = `url('${wallpapers[0]}')`
vendas.style.backgroundSize = 'cover'
vendas.style.backgroundPosition = 'center'

setInterval(trocarWallpaper, 8000)


const comoFunciona = document.querySelector('#como-funciona')
const planos = document.querySelector('#planos')

const pedras = [
  'assets/pedra1.jpeg',
  'assets/pedra2.jpeg',
  'assets/pedra3.jpeg',
  'assets/pedra4.jpeg',
  'assets/pedra5.jpeg',
  'assets/pedra6.jpeg'
]

let indicePedra = 0

function trocarPedras() {
  const proximoIndice = (indicePedra + 1) % pedras.length

  const img = new Image()
  img.src = pedras[proximoIndice]

  function realizarTroca() {
    comoFunciona.classList.add('transitando')
    planos.classList.add('transitando')

    setTimeout(function() {
      indicePedra = proximoIndice
      comoFunciona.style.backgroundImage = `url('${pedras[indicePedra]}')`
      comoFunciona.style.backgroundSize = 'cover'
      comoFunciona.style.backgroundPosition = 'center'
      planos.style.backgroundImage = `url('${pedras[indicePedra]}')`
      planos.style.backgroundSize = 'cover'
      planos.style.backgroundPosition = 'center'
      comoFunciona.classList.remove('transitando')
      planos.classList.remove('transitando')
    }, 500)
  }

  if (img.complete) {
    realizarTroca()
  } else {
    img.onload = realizarTroca
  }
}

comoFunciona.style.backgroundImage = `url('${pedras[0]}')`
comoFunciona.style.backgroundSize = 'cover'
comoFunciona.style.backgroundPosition = 'center'

planos.style.backgroundImage = `url('${pedras[0]}')`
planos.style.backgroundSize = 'cover'
planos.style.backgroundPosition = 'center'

setInterval(trocarPedras, 8000)