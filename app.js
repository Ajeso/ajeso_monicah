"use strict";
const projectThumbnails = document.querySelectorAll(".project-thumbnail");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");

function showModal(projectId, thumbnail) {
  const projectDetails = document.getElementById(`${projectId}-details`);
  if (projectDetails) {
    modal.style.display = "block";
    projectDetails.style.display = "block";
  }
}

function hideModal() {
  modal.style.display = "none";
  const projectDetails = document.querySelectorAll(".project-details");
  projectDetails.forEach((project) => {
    project.style.display = "none";
  });
}

projectThumbnails.forEach((thumbnail) => {
  const projectId = thumbnail.dataset.project;

  thumbnail.addEventListener("mouseenter", () => {
    showModal(projectId, thumbnail);
  });

  thumbnail.addEventListener("mouseleave", () => {
    hideModal();
  });
});

closeModal.addEventListener("click", () => {
  hideModal();
});
