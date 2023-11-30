// heroBanner actions
function scrollToElement(elementId) {
  var element = document.querySelector(".aboutMeSection");

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error("Element not found with id:", elementId);
  }
}

document.addEventListener("scroll", () => {
  document.querySelector(".navBar").style.display = "flex";
});

// Link do kontaktu w sekcji about me
contactLink = () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// Hamburger
var bars = document.querySelectorAll(".bar");

hamburgerAction = () => {
  document
    .querySelector(".hamburgerNav")
    .classList.toggle("hamburgerNav-active");

  document.body.classList.toggle("scrollDisalbed");
  if (bars.length == 3) {
    bars[1].classList.toggle("bar1");
    bars[0].classList.toggle("bar0");
    bars[2].classList.toggle("bar2");
  } else {
    console.error("powinny być 3 elementy bar");
  }
  document.querySelector(".navBar").classList.toggle("navbarHidden");
};

document.getElementById("mobile-menu").addEventListener("click", () => {
  hamburgerAction();
});

// Slajdy
var screens = [
  {
    imgAdress: "slidesImages/mobile_device.png",
    link: "https://github.com/wojtekswietojanski/Time-tracking-dashboard-frontend-mentor",
    yt: "https://youtu.be/KLZHeGf9r04",
  },
  {
    imgAdress: "slidesImages/screen4.png",
    link: "https://github.com/wojtekswietojanski/frontend-mentor-space-website",
    yt: "https://youtu.be/37pAT5p4bPs",
  },
  {
    imgAdress: "slidesImages/screenPizza.png",
    link: "https://github.com/wojtekswietojanski/restaurant-website",
    yt: "https://youtu.be/3mgHfkHqhYg",
  },
  {
    imgAdress: "slidesImages/screenStronka.png",
    link: "https://github.com/wojtekswietojanski?tab=repositories",
    yt: "https://youtu.be/D5p3KA6XZfk",
  },
  {
    imgAdress: "slidesImages/fastTyping.png",
    link: "https://github.com/wojtekswietojanski/Fast-Typing-Game",
    yt: "https://youtu.be/SgoI22JLiTA",
  },
  {
    imgAdress: "slidesImages/reactScreen.png",
    link: "https://github.com/wojtekswietojanski/React-pierwszy-projekt",
    yt: "https://youtu.be/sAKVIKht5yE",
  },
];

var slideImgDiv = document.querySelector(".projectsImg");
var innerDivs = slideImgDiv.querySelectorAll("div");
var innerDivsArray = Array.from(innerDivs);

function changeSlides(x) {
  if (x == 1 || x == -1) {
    if (x == -1) {
      // Shift array to the left
      screens.push(screens.shift());
    } else {
      // Shift array to the right
      screens.unshift(screens.pop());
    }
    innerDivsArray.forEach((element) => {
      element.style.opacity = 0;
    });

    showFoto();

    innerDivsArray.forEach((element) => {
      element.classList.remove("animationSlides");
      element.offsetWidth;
      element.classList.add("animationSlides");
    });
  } else {
    console.log("sunction changeSlides got incorrect arguments");
  }
}

function showFoto() {
  for (let i = 0; i < innerDivsArray.length; i++) {
    innerDivsArray[i].style.backgroundImage =
      "url(" + screens[i].imgAdress + ")";
  }
}

document.querySelector("#arrow").addEventListener("click", () => {
  changeSlides(-1);
  document.querySelector("#arrow").classList.remove("animationArrow1");
  document.querySelector("#arrow").offsetWidth;
  document.querySelector("#arrow").classList.add("animationArrow1");
});

document.querySelector("#arrow1").addEventListener("click", () => {
  changeSlides(1);
  document.querySelector("#arrow1").classList.remove("animationArrow");
  document.querySelector("#arrow1").offsetWidth;
  document.querySelector("#arrow1").classList.add("animationArrow");
});

// Obsługa najechania myszą bądżź kliknięcia proejktu
function projectHoverHandler(event) {
  var buttonHover = event.currentTarget.querySelectorAll("button");
  var linkHover = event.currentTarget.querySelectorAll("a");
  buttonHover.forEach((button) => button.classList.toggle("hoverOverSlide"));
  linkHover.forEach((link) => link.classList.toggle("hoverOverSlide"));
  linkHover[0].setAttribute(
    "href",
    screens[innerDivsArray.indexOf(event.currentTarget)].link
  );
  linkHover[1].setAttribute(
    "href",
    screens[innerDivsArray.indexOf(event.currentTarget)].yt
  );
}

function projectMouseOutHandler(event) {
  var buttonHover = event.currentTarget.querySelectorAll("button");
  var linkHover = event.currentTarget.querySelectorAll("a");
  buttonHover.forEach((button) => button.classList.toggle("hoverOverSlide"));
  linkHover.forEach((link) => link.classList.toggle("hoverOverSlide"));
}

function projectHover() {
  for (let i = 0; i < innerDivsArray.length; i++) {
    innerDivsArray[i].addEventListener("mouseover", projectHoverHandler);
    innerDivsArray[i].addEventListener("mouseout", projectMouseOutHandler);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showFoto();
  projectHover();
});

// animacje przy scrollu

function animate(elementQuerySelector, animationType) {
  // Sprawdzenie poprawnośći aegumentów i ustawienie zmiennych
  let element;
  if (document.querySelector(elementQuerySelector)) {
    element = document.querySelector(elementQuerySelector);
  } else {
    console.log("parametr elementQuerySelector jest niewłaściwy");
    return 0;
  }

  let animationClass;
  if (animationType == "left") {
    animationClass = "animationSlideInFromLeft";
  } else if (animationType == "right") {
    animationClass = "animationSlideInFromRight";
  } else {
    console.log("parametr animationType jest niewłaściwy");
    return 0;
  }
  // Sprawdzenie czy element został wyskrolowany od góry i dodanie animacji
  var windowHeight = window.innerHeight;
  var elementHeight = element.getBoundingClientRect().top;
  if (elementHeight < windowHeight) {
    element.classList.add(animationClass);
  } else {
    element.classList.remove(animationClass);
  }
}

// Dodanie animacji do poszczególnych elementów na stronie
window.addEventListener("scroll", () => animate(".aboutMeSection h2", "left"));
window.addEventListener("scroll", () => animate(".aboutMeSection h3", "right"));
window.addEventListener("scroll", () => animate(".skillsSection h2", "left"));

// Dodanie animacji dla każdego diva w skillsSection
const skillDivsNumber = document.querySelectorAll(".skillsSection div").length;
for (let i = 0; i < skillDivsNumber; i++) {
  // Stwórz blok zmiennych, aby utrzymać wartość i dla każdej iteracji
  (function (index) {
    window.addEventListener("scroll", () =>
      animate(".skillsSection div:nth-child(" + (index + 2) + ")", "left")
    );
  })(i);
}

// animacje dla sekcji z projektami
window.addEventListener("scroll", () =>
  animate(".projects .projectsDescription", "left")
);
window.addEventListener("scroll", () =>
  animate(".projects .projectsImg", "left")
);

// animacje dla sekcji kontakt
window.addEventListener("scroll", () => animate(".contact h2", "left"));
window.addEventListener("scroll", () => animate(".contact p", "left"));
window.addEventListener("scroll", () => animate(".contact div", "left"));
