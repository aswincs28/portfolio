/* js/script.js
   Mobile menu, theme toggle, typing, modal, contact form
*/

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuBtn = document.querySelector('.menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileClose = document.querySelector('.mobile-close');
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const typingEl = document.querySelector('.typing-text');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtns = document.querySelectorAll('.modal-close, .modal-backdrop');

  // ---------- Mobile drawer
  if(menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
    });
  }
  if(mobileClose) mobileClose.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
  // close when clicking backdrop
  if(mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if(e.target === mobileDrawer) mobileDrawer.classList.add('hidden');
    });
  }

  // ---------- Theme toggle (persist)
  function setTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }
  // load saved
  const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setTheme(saved);
  if(themeToggle) themeToggle.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  // ---------- Typing animation (simple)
  const phrases = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'];
  if(typingEl){
    let pi = 0, ch = 0, forward = true;
    setInterval(() => {
      const text = phrases[pi];
      typingEl.textContent = text.slice(0, ch) + (ch % 2 ? '|' : '');
      if(forward) ch++;
      else ch--;
      if(ch > text.length){ forward = false; setTimeout(()=>{}, 200); }
      if(ch === 0){ forward = true; pi = (pi + 1) % phrases.length; }
    }, 120);
  }

  // ---------- Smooth anchor scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href');
      if(hash.length > 1){
        e.preventDefault();
        const el = document.querySelector(hash);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // ---------- Project modal open/close
  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-project');
      const modal = document.querySelector(`#modal-${id}`);
      if(modal && modalBackdrop){
        modalBackdrop.style.display = 'flex';
        modalBackdrop.querySelector('.modal').scrollTop = 0;
        modalBackdrop.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        modal.style.display = 'block';
        // lock scroll
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // close modal (backdrop or close)
  if(modalBackdrop){
    modalBackdrop.addEventListener('click', (e) => {
      if(e.target === modalBackdrop) closeModal();
    });
  }
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));
  function closeModal(){ modalBackdrop.style.display = 'none'; document.body.style.overflow = ''; }

  // ---------- Contact form (fake submit)
  const contactForm = document.querySelector('#contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      // simple validation
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const msg = contactForm.querySelector('[name="message"]').value.trim();
      const info = contactForm.querySelector('.form-msg');

      if(!name || !email || !msg){
        info.textContent = 'Please fill all the fields.';
        btn.disabled = false;
        btn.textContent = 'Send';
        return;
      }

      // simulate send
      setTimeout(()=>{
        info.style.color = 'var(--accent)';
        info.textContent = 'Message sent. Thank you! (demo)';
        contactForm.reset();
        btn.disabled = false;
        btn.textContent = 'Send';
      }, 900);
    });
  }

}); // DOMContentLoaded
