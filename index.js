const a = document.querySelector(".hamburger-image")
const b = document.querySelector(".hamburger-menu")
const hamburger = document.querySelector(".navigation-list-hamburger")
const contactme = document.querySelector(".contactme2")
const arrow = document.querySelector(".arrow")
a.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      hamburger.classList.toggle("visible");
    }  
  })
 contactme.addEventListener("mouseover",(e)=>{
  if (e.target === e.currentTarget) {
    arrow.classList.toggle("translation");
  }  
 })
 contactme.addEventListener("mouseout",(e)=>{
  if (e.target === e.currentTarget) {
    arrow.classList.toggle("translation");
  }  
 })