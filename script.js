const sidebarMenu = document.querySelector('.sidebar-menu');
const videos = document.querySelectorAll('.video');

sidebarMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const tag = event.target.getAttribute('data-tag');
    videos.forEach(video => {
      const videoTags = video.getAttribute('data-tags').split(',');
      if (videoTags.includes(tag)) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
      }
    });
  }
});