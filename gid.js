const tuggleBtn = document.querySelector(".bars");
const btn = tuggleBtn.querySelector("i");
const dropdown = document.querySelector(".dropmenu");

tuggleBtn.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");
  btn.classList.toggle("fa-bars", !isOpen);
  btn.classList.toggle("fa-xmark", isOpen);
};


const scrollTop =  ()=>{
  window.scroll(0,0)
}
