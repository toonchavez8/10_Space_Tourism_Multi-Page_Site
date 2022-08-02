
// Variables
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
  // if the nav is closed, open it
  const visability = nav.getAttribute("data-visable");
  if (visability === "false") {
    nav.setAttribute("data-visable", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } // if the nav is open, close it
  else {
    nav.setAttribute("data-visable", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
