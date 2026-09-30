/* ============================================
   Ian Talo - Projects Filter
   ============================================ */

(function initProjectsFilter() {
  'use strict';

  const filterButtons = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  const ACTIVE_CLASSES = ['bg-primary-container', 'text-on-primary-fixed', 'shadow-sm'];
  const INACTIVE_CLASSES = ['text-on-surface-variant'];

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.getAttribute('data-filter');

      // Update active state on buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove.apply(btn.classList, ACTIVE_CLASSES);
        btn.classList.add.apply(btn.classList, INACTIVE_CLASSES);
      });

      button.classList.add.apply(button.classList, ACTIVE_CLASSES);
      button.classList.remove.apply(button.classList, INACTIVE_CLASSES);

      // Filter cards with fade
      projectCards.forEach(function (card) {
        const categories = card.getAttribute('data-category') || '';
        const matches = filter === 'all' || categories.indexOf(filter) !== -1;

        if (matches) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(function () {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();
