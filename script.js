document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("aparecer"); 
    }, index * 300); 
  });
});
