document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("aparecer"); 
    }, index * 300); 
  });
});
    // Função p rolagem suave
    function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    // ouvintes de clique aos links da sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = link.getAttribute('href').substring(1);
        scrollToElement(target);
      });
    });

    