const screenWidth = window.screen.width
const screenHeight = window.screen.height
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
 alert(`Ширина экрана: ${screenWidth}px, Высота экрана: ${screenHeight}px`)
alert(`C учётом полосы прокрутки ширина окна браузера: ${window.innerWidth}px, высота: ${window.innerHeight}px`)
})

