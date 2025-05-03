// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  
    // Animate skill bars with a delay
    setTimeout(function () {
      const skillLevels = document.querySelectorAll(".skill-level");
      skillLevels.forEach(function (skillLevel) {
        const width = skillLevel.style.width;
        skillLevel.style.width = "0";
  
        setTimeout(function () {
          skillLevel.style.width = width;
        }, 300);
      });
    }, 500);
  
    // Scroll to top button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = "scroll-top-btn";
    Object.assign(scrollTopBtn.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "none",
      padding: "10px 15px",
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: "100",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      transition: "opacity 0.3s, transform 0.3s",
      width: "40px",
      height: "40px",
    });
    document.body.appendChild(scrollTopBtn);
  
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "block";
        scrollTopBtn.style.opacity = "1";
      } else {
        scrollTopBtn.style.opacity = "0";
        setTimeout(() => {
          if (window.pageYOffset <= 300) {
            scrollTopBtn.style.display = "none";
          }
        }, 300);
      }
    });
  
    // Hover effects
    const experienceItems = document.querySelectorAll(
      ".experience-item, .education-item"
    );
    experienceItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const dot = this.querySelector(".timeline-dot");
        if (dot) dot.style.transform = "scale(1.2)";
        this.style.borderLeftColor = "#3498db";
      });
      item.addEventListener("mouseleave", function () {
        const dot = this.querySelector(".timeline-dot");
        if (dot) dot.style.transform = "scale(1)";
        this.style.borderLeftColor = "#e1e8ed";
      });
    });
  
    // Dark mode toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = "dark-mode-toggle";
    Object.assign(darkModeToggle.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "10px",
      backgroundColor: "#f0f0f0",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: "100",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
    document.body.appendChild(darkModeToggle);
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      applyDarkMode();
    }
  
    darkModeToggle.addEventListener("click", function () {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
      darkModeToggle.innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", isDark ? "light" : "dark");
      isDark ? removeDarkMode() : applyDarkMode();
    });
  
    function applyDarkMode() {
      document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
      document.body.style.backgroundColor = "#1a1a2e";
  
      const icon = darkModeToggle.querySelector("i");
      if (icon) {
        icon.style.transition = "color 0.5s ease";
        icon.style.color = "#fff";
      }
  
      const cvContainer = document.querySelector(".cv-container");
      const mainContent = document.querySelector(".main-content");
  
      [cvContainer, mainContent].forEach((el) => {
        if (el) {
          el.style.transition = "background-color 0.5s ease, color 0.5s ease";
          el.style.backgroundColor = "#16213e";
          el.style.color = "#e6e6e6";
        }
      });
  
      document.querySelectorAll(
        ".main-content p, .main-content li, .main-content div, .project-description, .certification-item div:last-child"
      ).forEach((el) => {
        el.style.transition = "color 0.5s ease";
        el.style.color = "#e6e6e6";
      });
  
      document.querySelectorAll(".experience-duration, .education-duration").forEach((el) => {
        el.style.transition = "background-color 0.5s ease, color 0.5s ease";
        el.style.color = "#b3b3b3";
        el.style.backgroundColor = "#2d4263";
      });
  
      document.querySelectorAll(
        ".experience-company, .education-institution, .project-tech, .project-links a"
      ).forEach((el) => (el.style.color = "#64b5f6"));
  
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
        if (!h.closest(".sidebar")) h.style.color = "#e6e6e6";
      });
  
      document.querySelectorAll(".experience-item, .education-item").forEach((el) => {
        el.style.transition = "border-left-color 0.5s ease";
        el.style.borderLeftColor = "#2d4263";
      });
  
      document.querySelectorAll(".certification-item").forEach((el) => {
        el.style.transition = "background-color 0.5s ease";
        el.style.backgroundColor = "#1f3152";
      });
  
      document.querySelectorAll(".project-card").forEach((el) => {
        el.style.transition = "background-color 0.5s ease";
        el.style.backgroundColor = "#1f3152";
      });
  
      const footer = document.querySelector(".cv-footer");
      if (footer) {
        footer.style.borderTopColor = "#2d4263";
        footer.querySelectorAll("p").forEach((p) => (p.style.color = "#a0a0a0"));
      }
  
      const objective = document.querySelector(".objective");
      if (objective) {
        objective.style.transition = "background-color 0.5s ease, color 0.5s ease";
        objective.style.backgroundColor = "#1f3152";
        objective.style.color = "#d4d4d4";
      }
  
      darkModeToggle.style.backgroundColor = "#2c3e50";
      darkModeToggle.style.color = "white";
    }
  
    function removeDarkMode() {
      document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
      document.body.style.backgroundColor = "#f5f7fa";
  
      const icon = darkModeToggle.querySelector("i");
      if (icon) {
        icon.style.transition = "color 0.5s ease";
        icon.style.color = "#000";
      }
  
      const cvContainer = document.querySelector(".cv-container");
      const mainContent = document.querySelector(".main-content");
  
      [cvContainer, mainContent].forEach((el) => {
        if (el) {
          el.style.transition = "background-color 0.5s ease, color 0.5s ease";
          el.style.backgroundColor = "#fff";
          el.style.color = "#333";
        }
      });
  
      document.querySelectorAll(
        ".main-content p, .main-content li, .main-content div, .project-description, .certification-item div:last-child"
      ).forEach((el) => (el.style.color = ""));
  
      document.querySelectorAll(".experience-duration, .education-duration").forEach((el) => {
        el.style.color = "#777";
        el.style.backgroundColor = "#f8f9fa";
      });
  
      document.querySelectorAll(
        ".experience-company, .education-institution"
      ).forEach((el) => (el.style.color = "#3498db"));
  
      document.querySelectorAll(".project-tech").forEach((el) => (el.style.color = "#3498db"));
  
      document.querySelectorAll(".project-links a").forEach((el) => (el.style.color = "#2c3e50"));
  
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
        if (!h.closest(".sidebar")) h.style.color = "";
      });
  
      document.querySelectorAll(".experience-item, .education-item").forEach((el) => {
        el.style.borderLeftColor = "#e1e8ed";
      });
  
      document.querySelectorAll(".certification-item").forEach((el) => {
        el.style.backgroundColor = "#f8f9fa";
      });
  
      document.querySelectorAll(".project-card").forEach((el) => {
        el.style.backgroundColor = "#f8f9fa";
      });
  
      const footer = document.querySelector(".cv-footer");
      if (footer) {
        footer.style.borderTopColor = "#e1e8ed";
        footer.querySelectorAll("p").forEach((p) => (p.style.color = "#777"));
      }
  
      const objective = document.querySelector(".objective");
      if (objective) {
        objective.style.backgroundColor = "#ecf0f1";
        objective.style.color = "#333";
      }
  
      darkModeToggle.style.backgroundColor = "#f0f0f0";
      darkModeToggle.style.color = "#000";
    }
  });
  