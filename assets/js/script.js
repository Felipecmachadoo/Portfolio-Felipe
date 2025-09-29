new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3",
  autoScrolling: true,
  navigation: false,
  sectionsColor: ["#050505", "#050505", "#050505", "#050505"],
  onLeave: function (origin, destination, direction) {
    updateSidebar(destination.index);
    updateNavbar(destination.index);
  },
  afterLoad: function (origin, destination, direction) {
    updateSidebar(destination.index);
    updateNavbar(destination.index);
  },
});

function updateSidebar(activeIndex) {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item, index) => {
    item.classList.toggle("active", index === activeIndex);
  });
}

function updateNavbar(activeIndex) {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link, index) => {
    if (index === activeIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    this.classList.add("active");

    const navMenu = document.querySelector(".nav-menu");
    const navToggle = document.querySelector(".nav-toggle");
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

document.querySelectorAll(".sidebar-item").forEach((item) => {
  item.addEventListener("click", function () {
    const sectionIndex = parseInt(this.getAttribute("data-index"));
    fullpage_api.moveTo(sectionIndex + 1);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const sectionIndex = Array.from(
        document.querySelectorAll(".section")
      ).indexOf(targetSection);
      fullpage_api.moveTo(sectionIndex + 1);
    }
  });
});
