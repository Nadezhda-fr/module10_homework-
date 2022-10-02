const btn1 = document.querySelector('.btn_icon1');

const btn2 = document.querySelector('.btn_icon2');

btn1.addEventListener('click', () => {
 btn1.classList.toggle('none');
 btn2.classList.toggle('none');
})
  
btn2.addEventListener('click', () => {
 btn1.classList.toggle('none');
 btn2.classList.toggle('none');
})