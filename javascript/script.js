// Navigation Bar 
/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// getting current Date for search box
var date = new Date();
var currentDate = date.toISOString().slice(0, 10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('currentDate').value = currentDate;
document.getElementById('currentTime').value = currentTime;

// slick slider for offers
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    }
  },
});

//Go to top function
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction(), navfunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}