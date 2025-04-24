// script de slider templete
 const image = [
  "/images/template/0bc16e52ee2d2336569d508a7c697e64.jpg",
  "/images/template/2e53a5ce9664dee4a2177bee61716893.jpg",
  "/images/template/95b9a7760166dbe7190c301a57fdc2aa.jpg"
 ];
 const imgElement = document.getElementById("imag");

 let currentIndex = 0;

 setInterval(() => {
  imgElement.src = image[currentIndex];
  currentIndex = (currentIndex + 1) % image.length;
 }, 10000);


// script navbar
const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggleMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelectorAll('#main-nav ul a');

toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
  toggleMenu.classList.toggle('-translate-y-full');

  if(toggleMenu.classList.contains('-translate-y-full')) {
    toggleMenuImg.setAttribute("src", "/images/icones/1738779663792.jpg");
    toggleMenuBtn.setAttribute("aria-expaned", "false");
  }
  else{
    toggleMenuImg.setAttribute("src", "/images/icones/remove_delete_exit_close_1545.png");
    toggleMenuBtn.setAttribute("aria-expaned", "true");
  }
}

//script slider presentation
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const nextButton = document.getElementById('arrowone');
  const prevButton = document.getElementById('arrowtwo');
  let currentIndex = 0;

  nextButton.addEventListener('click', function() {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * slider.children[0].offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
});








