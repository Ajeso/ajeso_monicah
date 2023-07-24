// JavaScript for handling lightbox functionality
// JavaScript for handling lightbox functionality
const projectThumbnails = document.querySelectorAll(".project-thumbnail");
const lightbox = document.getElementById("project-lightbox");
const closeLightbox = document.getElementById("close-lightbox");

// Function to display the lightbox when hovering over the project thumbnail
function showLightbox(projectId) {
  const projectDetails = document.getElementById(`${projectId}-details`);
  if (projectDetails) {
    lightbox.style.display = "flex";
    projectDetails.style.display = "block";

    // Calculate the center position of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the offset to center the lightbox content
    const lightboxWidth = lightbox.offsetWidth;
    const lightboxHeight = lightbox.offsetHeight;
    const offsetLeft = centerX - lightboxWidth / 2;
    const offsetTop = centerY - lightboxHeight / 2;

    // Apply the offset to the lightbox content
    lightbox.style.left = `${offsetLeft}px`;
    lightbox.style.top = `${offsetTop}px`;
  }
}

// Event listeners for project thumbnails
projectThumbnails.forEach((thumbnail) => {
  const projectId = thumbnail.dataset.project;

  // Show lightbox on hover
  thumbnail.addEventListener("mouseenter", () => {
    showLightbox(projectId);
  });

  // Hide lightbox when mouse leaves
  thumbnail.addEventListener("mouseleave", () => {
    lightbox.style.display = "none";
    const projectDetails = document.querySelectorAll(".project-details");
    projectDetails.forEach((project) => {
      project.style.display = "none";
    });
  });
});

// Event listener for close button
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  const projectDetails = document.querySelectorAll(".project-details");
  projectDetails.forEach((project) => {
    project.style.display = "none";
  });
});

// Wrap the code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll function
  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const ease = function (t, b, c, d) {
        t = t / (d / 2);
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  // Attach click event to the navigation links
  const navLinks = document.querySelectorAll('.nav a[href^="/"]');
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = link.getAttribute("href");
      smoothScroll(target, 4000); // Change 1000 to adjust the scrolling speed (in milliseconds)
    });
  });
});
