let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const menuhover = document.getElementById("menuhover");
const menuopen = document.getElementById("menuopen");

menuhover.addEventListener("mouseenter", () => {
  if (window.innerWidth >= 768) {
    menuopen.style.display = "block";
  }
});

menuhover.addEventListener("mouseleave", () => {
  if (window.innerWidth >= 768) {
    menuopen.style.display = "none";
  }
});
