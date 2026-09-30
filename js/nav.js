/* ============================================
   Ian Talo - Shared Navigation Scripts
   ============================================ */

(function initNav() {
  'use strict';

  // ---- Mobile menu toggle ----
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ---- Copy email to clipboard ----
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const email = copyBtn.getAttribute('data-email');
      if (!email) return;

      navigator.clipboard.writeText(email).then(function () {
        const label = copyBtn.querySelector('.copy-label');
        if (!label) return;

        const original = label.textContent;
        label.textContent = 'COPIED';
        copyBtn.classList.add('copy-btn-success');

        setTimeout(function () {
          label.textContent = original;
          copyBtn.classList.remove('copy-btn-success');
        }, 2000);
      }).catch(function () {
        // Fallback for older browsers
        const temp = document.createElement('textarea');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        try { document.execCommand('copy'); } catch (e) { /* noop */ }
        document.body.removeChild(temp);
      });
    });
  }
})();
