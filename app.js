"use strict";
const projectThumbnails = document.querySelectorAll(".project-thumbnail");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
let isModalOpen = false;
let hideTimer;

function showModal(projectId, thumbnail) {
  if (isModalOpen) return;
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

    isModalOpen = true;
  }
}

function hideModal() {
  hideTimer = setTimeout(() => {
    modal.style.display = "none";
    const projectDetails = document.querySelectorAll(".project-details");
    projectDetails.forEach((project) => {
      project.style.display = "none";
    });
    isModalOpen = false;
  }, 20);
}

projectThumbnails.forEach((thumbnail) => {
  const projectId = thumbnail.dataset.project;

  thumbnail.addEventListener("mouseenter", () => {
    clearTimeout(hideTimer);
    showModal(projectId, thumbnail);
  });

  thumbnail.addEventListener("mouseleave", () => {
    hideModal();
  });
});

modal.addEventListener("mouseenter", () => {
  clearTimeout(hideTimer);
});

modal.addEventListener("mouseleave", () => {
  hideModal();
});

closeModal.addEventListener("click", () => {
  hideModal();
});
