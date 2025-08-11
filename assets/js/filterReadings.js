document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.tag-filter');
  const readings = document.querySelectorAll('.article-block li');
  let activeTag = null; // track currently active tag

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;

      // if clicking the same tag again, toggle it off
      if (activeTag === tag) {
        readings.forEach(item => item.style.display = 'none');
        activeTag = null;
        return;
      }

      activeTag = tag;

      readings.forEach(item => {
        const isFavorite = item.querySelector('b') !== null;

        if (tag === 'all') {
          item.style.display = ''; // ensure every item is visible
        } else if (tag === 'favorites') {
          item.style.display = isFavorite ? '' : 'none';
        } else {
          item.style.display = item.classList.contains(tag) ? '' : 'none';
        }
      });
    });
  });

  // initially hide all readings
  readings.forEach(item => item.style.display = 'none');
});