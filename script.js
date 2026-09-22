const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.cssText += isOpen ? '' : `
      position:absolute; top:64px; left:0; right:0; background:#fff;
      flex-direction:column; padding:20px 24px; gap:18px; box-shadow:0 12px 24px -12px rgba(15,23,42,0.25);
    `;
  });

  const revealEls = document.querySelectorAll('.program-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* animasi rintik cahaya di hero */
  const rintikLayer = document.getElementById('rintikLayer');
  if (rintikLayer) {
    const totalRintik = 45;
    for (let i = 0; i < totalRintik; i++) {
      const drop = document.createElement('span');
      drop.className = 'rintik';
      const left = Math.random() * 100;
      const duration = 1.6 + Math.random() * 1.8;
      const delay = Math.random() * 4;
      const height = 14 + Math.random() * 14;
      drop.style.left = left + '%';
      drop.style.height = height + 'px';
      drop.style.animationDuration = duration + 's';
      drop.style.animationDelay = delay + 's';
      drop.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
      rintikLayer.appendChild(drop);
    }
  }

  /* testimoni: tab orang tua / alumni, masing-masing punya slider sendiri */
  function setupSlider(groupKey) {
    const track = document.querySelector(`.testi-slides[data-slides="${groupKey}"]`);
    const dotsWrap = document.querySelector(`.testi-dots[data-dots="${groupKey}"]`);
    
    if (!track || !dotsWrap) return; // Skip if elements don't exist
    
    const slides = track.querySelectorAll('.testi-slide');
    let current = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      current = i;
      track.style.transform = `translateX(-${i * 100}%)`;
      dotsWrap.querySelectorAll('button').forEach((d, idx) => d.classList.toggle('active', idx === i));
    }

    setInterval(() => {
      if (!document.getElementById('group-' + groupKey).classList.contains('active')) return;
      goTo((current + 1) % slides.length);
    }, 5000);
  }
  setupSlider('ortu');
  setupSlider('alumni');

  const testiTabBtns = document.querySelectorAll('.testi-tab-btn');
  testiTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      testiTabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.testi-group').forEach(g => g.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('group-' + btn.dataset.group).classList.add('active');
    });
  });

  /* pop up pengumuman PPDB */
  const ppdbPopup = document.getElementById('ppdbPopup');
  function openPpdbPopup(){ 
    console.log('Opening PPDB popup');
    if (ppdbPopup) {
      ppdbPopup.classList.add('show');
    } else {
      console.error('PPDB popup element not found');
    }
  }
  function closePpdbPopup(){
    console.log('Closing PPDB popup');
    if (ppdbPopup) {
      ppdbPopup.classList.remove('show');
    }
  }
  
  // Debugging
  console.log('Current pathname:', window.location.pathname);
  console.log('PPDB popup element:', ppdbPopup);
  
  // Tampilkan popup hanya di halaman index
  const isIndexPage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname === '/' || 
                      window.location.pathname.endsWith('/') || 
                      window.location.pathname.includes('index');
  
  console.log('Is index page:', isIndexPage);
  
  if (isIndexPage) {
    window.addEventListener('load', () => {
      console.log('Page loaded, showing popup in 700ms');
      setTimeout(openPpdbPopup, 700);
    });
  } else {
    console.log('Not index page, popup will not show');
  }
  
  const ppdbClose = document.getElementById('ppdbClose');
  const ppdbLater = document.getElementById('ppdbLater');
  const ppdbCta = document.getElementById('ppdbCta');
  
  if (ppdbClose) ppdbClose.addEventListener('click', closePpdbPopup);
  if (ppdbLater) ppdbLater.addEventListener('click', closePpdbPopup);
  if (ppdbCta) ppdbCta.addEventListener('click', closePpdbPopup);
  
  if (ppdbPopup) {
    ppdbPopup.addEventListener('click', (e) => { if (e.target === ppdbPopup) closePpdbPopup(); });
  }
  
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePpdbPopup(); });
