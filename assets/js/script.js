const menuBurger = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
menuBurger.addEventListener('click',()=>{
  console.log("clicked")
  navLinks.classList.toggle('mobile-menu')
  
})