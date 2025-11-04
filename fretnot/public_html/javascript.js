/*Navbar */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link, index) => {
    // Add staggered animation to links
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

/*Close Navbar when clicking a link */
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    links.forEach((link) => {
      link.classList.remove("fade");
      link.style.animation = "";
    });
    hamburger.classList.remove("toggle");
  });
});

/* Scroll detection for navbar */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("#navbar");
  if (window.scrollY <= 100) nav.className = "";
  else nav.className = "scroll";
});

/*Accordion */
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    // Close all other open accordions
    const currentlyActive = document.querySelector(".accordion-item-header.active");
    if (currentlyActive && currentlyActive !== accordionItemHeader) {
      currentlyActive.classList.remove("active");
      currentlyActive.nextElementSibling.style.maxHeight = 0;
    }
    
    // Toggle current accordion
    accordionItemHeader.classList.toggle("active");
    
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.display = "block";
    } else {
      accordionItemBody.style.display = "none";
    }
  });
});

/*Modal handling*/
const modal = document.getElementById("myModal");
const modalBtns = document.querySelectorAll("#myBtn");
const closeBtn = document.getElementsByClassName("close")[0];

/*Open modal when user clicks on btn */
modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });
});

//Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
};

//click anywhere else on the screen to close modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
};

// Form validation
const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("number");
    const instrument = document.getElementById("instrument");
    
    let valid = true;
    
    // Simple validation
    if (name.value.trim() === "") {
      name.style.borderColor = "red";
      valid = false;
    } else {
      name.style.borderColor = "#ccc";
    }
    
    if (email.value.trim() === "" || !isValidEmail(email.value)) {
      email.style.borderColor = "red";
      valid = false;
    } else {
      email.style.borderColor = "#ccc";
    }
    
    if (phone.value.trim() === "") {
      phone.style.borderColor = "red";
      valid = false;
    } else {
      phone.style.borderColor = "#ccc";
    }
    
    if (instrument.value === "Choose") {
      instrument.style.borderColor = "red";
      valid = false;
    } else {
      instrument.style.borderColor = "#ccc";
    }
    
    if (!valid) {
      event.preventDefault();
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Navigation scroll padding
const navigationHeight = document.querySelector("#navbar").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + 1 + "px"
);

// Testimonials slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      revealElements[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
// Trigger on initial load
revealOnScroll();