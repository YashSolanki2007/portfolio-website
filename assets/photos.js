const viewer = document.querySelector('.photo-viewer');
const photoLinks = [...document.querySelectorAll('.photo-link')];

if (typeof viewer.showModal === 'function') {
  const media = viewer.querySelector('.photo-viewer-media');
  const caption = viewer.querySelector('.photo-viewer-caption');
  const count = viewer.querySelector('.photo-viewer-count');
  let currentIndex = 0;
  let opener;

  function showPhoto(index) {
    currentIndex = (index + photoLinks.length) % photoLinks.length;
    const link = photoLinks[currentIndex];
    const thumbnail = link.querySelector('img');
    const image = new Image(Number(thumbnail.getAttribute('width')), Number(thumbnail.getAttribute('height')));
    image.alt = thumbnail.alt;
    image.src = link.href;
    media.replaceChildren(image);
    caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
    count.textContent = `${currentIndex + 1} of ${photoLinks.length}`;
  }

  photoLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      showPhoto(index);
      viewer.showModal();
    });
  });

  viewer.querySelector('.photo-previous').addEventListener('click', () => showPhoto(currentIndex - 1));
  viewer.querySelector('.photo-next').addEventListener('click', () => showPhoto(currentIndex + 1));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(currentIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => opener.focus({ preventScroll: true }));
}
