document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup-evento');
  const closeBtn = document.querySelector('.close-btn');

  setTimeout(() => {
    popup.style.display = 'block';
  }, 2000);

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
