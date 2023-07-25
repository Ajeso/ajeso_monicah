"use strict";

const projectThumbnails = document.querySelectorAll(".project-thumbnail");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");

function showModal(projectId, thumbnail) {
  const projectDetails = document.getElementById(`${projectId}-details`);
  if (projectDetails) {
    modal.style.display = "block";
    projectDetails.style.display = "block";

    const thumbnailRect = thumbnail.getBoundingClientRect();
    const thumbnailX = thumbnailRect.left + thumbnailRect.width / 2;
    const thumbnailY = thumbnailRect.top + thumbnailRect.height / 2;

    const modalContent = modal.querySelector(".modal-content");
    modalContent.style.left = `${thumbnailX}px`;
    modalContent.style.top = `${thumbnailY}px`;
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
