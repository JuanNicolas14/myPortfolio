/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// validamos si hay algo en el local storage
if (selectedTheme) {
  // preguntamos si el selectedTheme del localStorage es igual a dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== COLOR MENU ====================*/

const colorButton = document.getElementById("color-button");
const colorsMenu = document.getElementById("colors-menu");
const colorsClose = document.getElementById("colors-close");

/*===== COLOR MENU SHOW =====*/
/* Validate if constant exists */
if (colorButton) {
  colorButton.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      colorsMenu.classList.toggle("show-color");
    } else {
      colorsMenu.classList.toggle("show-colors");
    }
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (colorsClose) {
  colorsClose.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      colorsMenu.classList.remove("show-color");
    } else {
      colorsMenu.classList.remove("show-colors");
    }
  });
}

/*==================== CHANGE COLOR ====================*/
colorOptions = document.querySelectorAll(".color__option");
const blueColor = 192;
const greenColor = 142;
const redColor = 360;
const purpleColor = 250;
const yellowColor = 62;

function changeColor(e) {
  var r = document.querySelector(":root");
  const id = e.target.getAttribute("id");
  switch (id) {
    case "green-color":
      r.style.setProperty("--hue-color", greenColor);
      break;
    case "blue-color":
      r.style.setProperty("--hue-color", blueColor);
      break;
    case "red-color":
      r.style.setProperty("--hue-color", redColor);
      break;
    case "purple-color":
      r.style.setProperty("--hue-color", purpleColor);
      break;
    case "yellow-color":
      r.style.setProperty("--hue-color", yellowColor);
      break;
    default:
      break;
  }
}

colorOptions.forEach((n) => n.addEventListener("click", changeColor));

/*==================== READ MORE ====================*/

const moreButtons = document.querySelectorAll(".read__more--btn");
const moreText = document.getElementById("more-text");

moreButtons.forEach((n) =>
  n.addEventListener("click", (event) => {
    const current = event.target;
    moreText.classList.toggle("more__text--show");

    current.textContent = current.textContent.includes("Leer mas")
      ? "Leer menos.."
      : "Leer mas...";
  })
);

/*==================== FORMULARIO ====================*/

const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#send-email");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:juan.cardenasc@outlook.com?subject=Nombre: ${form.get(
      "name"
    )}, Correo: ${form.get("email")}&body=${form.get("message")}`
  );
  $buttonMailto.click();
}

/*==================== SECTIONS ACTIVE ====================*/
const mainContent = document.querySelector(".main-content");
const section = document.querySelectorAll(".section");

mainContent.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    //hide other sections
    section.forEach((section) => {
      section.classList.remove("active");
    });

    const elements = document.querySelectorAll(`.${id}`);
    elements.forEach((element) => {
      element.classList.add("active");
    });
  }
});

/*==================== MIXITUP FILTER PORTFOLIO ====================*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));
