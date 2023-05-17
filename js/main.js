const menu = document.querySelector('.nav__hamburguer');
const options = document.querySelector('.nav__options');
menu.addEventListener("click", ()=>{
  options.classList.toggle('hidden');
  menu.classList.toggle('close');
});
window.addEventListener("resize",(e)=>{
  if(e.target.innerWidth >= 601){
    options.classList.remove('hidden');
    menu.classList.remove('close');
  }
});