window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom',
  distance: '15px'
});

sr.reveal('.showCase-left', {
  duration: 4000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('.showCase-right', {
  duration: 4000,
  origin: 'right',
  distance: '300px'
});

sr.reveal('.showCase-btn', {
  duration: 2000,
  delay: 4000,
  origin: 'bottom',
  distance: '20px'
});

sr.reveal('#testimonial div', {
  duration: 2000,
  origin: 'bottom',
  distance: '20px'
});

sr.reveal('.info-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});

sr.reveal('.info-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});

// Smooth Scrolling

let anchorlinks = document.querySelectorAll('a[href^="#"]')
for (let item of anchorlinks) { // re
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start', 
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}
