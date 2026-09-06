(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle.hidden = false;
  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

  const form = document.getElementById('founding-form');
  const error = document.getElementById('form-error');
  const dialog = document.getElementById('email-dialog');
  const preview = document.getElementById('email-preview');
  const emailLink = document.getElementById('email-link');
  const copyStatus = document.getElementById('copy-status');
  document.getElementById('prepare-email').disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    error.hidden = true;
    if (form.elements.website.value) return;
    const name = form.elements.name.value.trim();
    const restaurant = form.elements.restaurant.value.trim();
    const email = form.elements.email.value.trim();
    if (!name || !restaurant || !form.reportValidity()) {
      error.textContent = 'Please enter your name, restaurant, and a valid email address.';
      error.hidden = false;
      (!name ? form.elements.name : !restaurant ? form.elements.restaurant : form.elements.email).focus();
      return;
    }
    const message = form.elements.message.value.trim();
    const lines = ['Hello Chef Cory,', '', 'I would like to discuss the Project MISE design partner program.', '', 'Name: ' + name, 'Restaurant: ' + restaurant, 'Email: ' + email];
    if (message) lines.push('', 'Where I need more clarity:', message);
    const body = lines.join('\n');
    const subject = 'Project MISE design partner inquiry — ' + restaurant;
    preview.textContent = 'To: cory@mcsatech.com\nSubject: ' + subject + '\n\n' + body;
    emailLink.href = 'mailto:cory@mcsatech.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    copyStatus.textContent = '';
    dialog.showModal();
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  document.getElementById('copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(preview.textContent); copyStatus.textContent = 'Message copied. Paste it into your email and send when ready.'; }
    catch { copyStatus.textContent = 'Copy was unavailable. Select the message above and copy it manually.'; }
  });
})();
