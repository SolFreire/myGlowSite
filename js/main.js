// menu mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".navbar__toggle");
  const links = document.querySelector(".navbar__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // vídeos: se o arquivo em assets/video/ ainda não existir, mostra o placeholder
  document.querySelectorAll("[data-video-frame]").forEach((frame) => {
    const video = frame.querySelector("video");
    const placeholder = frame.querySelector(".placeholder");
    if (!video || !placeholder) return;

    video.addEventListener("error", () => {
      video.style.display = "none";
      placeholder.style.display = "flex";
    });
  });
});
