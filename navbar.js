const links = document.querySelector('.links');
const button = document.querySelector('.icon');

button.addEventListener('click',function(){
  links.classList.toggle('showlink');
})