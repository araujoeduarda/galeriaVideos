
    // ouvintes de clique aos links da sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = link.getAttribute('href').substring(1);
        scrollToElement(target);
      });
    });

    function scrollToSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

    
//Aparecimento do video//

function loadVideo(videoId, containerId) {
  const videoContainer = document.getElementById(containerId);
  videoContainer.innerHTML = `
    <div class="video-wrapper">
      <iframe width="260" height="115" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    </div>`;
}
