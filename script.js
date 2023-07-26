let burger = document.getElementById("burger");
let rightnav = document.getElementById("navigationList");
let icon = document.getElementById("icon");
let zindex = document.getElementById("displaynone");
icon.classList.toggle("none");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("right");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
  icon.classList.toggle("red");
  displaynone.classList.toggle("none");
});
