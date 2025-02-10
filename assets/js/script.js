ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
}); 

ScrollReveal().reveal('.left', { origin: 'left' });
ScrollReveal().reveal('.right', { origin: 'right' });
ScrollReveal().reveal('.funcionalidades, .footer', { origin: 'bottom' });
ScrollReveal().reveal('.left-app', { origin: 'left' });
ScrollReveal().reveal('.right-app', { origin: 'right' });
ScrollReveal().reveal('.planos, .contato', { origin: 'top' });


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
})