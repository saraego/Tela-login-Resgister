const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')
//const moveOverlay = () => loginContainer.classList.add('move')
//const moverDelete = () => loginContainer.classList.remove('move')

document.getElementById('open-register').addEventListener('click',moveOverlay)
document.getElementById('open-login').addEventListener('click',moveOverlay)//poderia ser o function moveDelete

document.getElementById('open-register-mobile').addEventListener('click',moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click',moveOverlay)