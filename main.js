/**
 * Responsive nav bar written with CSS Grid
 * Kudos: https://www.youtube.com/watch?v=zFpReiq-wuI&feature=youtu.be
 *
 * Danos on YouTube did a marvelous tutorial but failed to leave
 * a link to the source code. I took the liberty of following
 * the video and detailing the code here WITH improvements.
 *
 * His later Github link leads to 404
 *
 * CLICK the FORK button above
 *
 * courtesy of https://github.com/thomascayne
 */

var dropdown = document.querySelector(".xen-nav .dropdown");
var button = document.querySelector(".xen-nav .menux");

/**
 *Is needed to close the dropdown when user clicks outside
 */
var nav = document.querySelector(".xen-nav");

/**
 * Alternative 1: works with: 
 * <i class="material-icons menu" onclick="menu()">menu</i>
 */
function menu() {
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
    button.innerHTML = "MenÃ¼";
  } else {
    dropdown.style.display = "grid";
    button.innerHTML = "Kapat";
  }
}

/**
 * Alternative 2: works with: 
 * <i class="material-icons menu">menu</i>
button.addEventListener('click', function() {
    if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
    button.innerHTML = "menu";
  } else {
    dropdown.style.display = "grid";
    button.innerHTML = "close";
  }
});
 */

/**
 * Close the dropdown (if opened) on window resize
 */
window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    dropdown.style.display = "none";
    button.innerHTML = "MenÃ¼";
  }
});

/**
 * If the dropdown is open and a click outside is detected,
 * the dropdown will be closed
 */
document.addEventListener("click", function(event) {
  var isClickInside = nav.contains(event.target);
  if (!isClickInside) {
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
      button.innerHTML = "MenÃ¼";
    }
  }
});



/* Slayt */
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.indicator-dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // 2 saniyede bir slayt değişimi

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}