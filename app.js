var tl = gsap.timeline();

tl.from("#card, #card img,#card h1, #card h5, #card button", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

var isStatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "FRIENDS";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isStatus.innerHTML = "STRANGER";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
