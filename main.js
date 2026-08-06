(function applyEarlyTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  highlightActiveLink();
  initProgramsDropdown();
  autoApplyAnimations();
  initScrollReveal();
  initNavbarScroll();
  initStatsCountUp();
  initLogoInteractivity();
});
function initTheme() {
  const toggler = document.getElementById('themeToggler');
  if (!toggler) return;
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  htmlEl.setAttribute('data-theme', initialTheme);
  updateThemeActiveState(initialTheme);
  const buttons = toggler.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mode = btn.getAttribute('data-mode');
      htmlEl.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      updateThemeActiveState(mode);
    });
  });
}
function updateThemeActiveState(theme) {
  const toggler = document.getElementById('themeToggler');
  if (!toggler) return;
  const buttons = toggler.querySelectorAll('.theme-btn');
  buttons.forEach(btn => {
    const mode = btn.getAttribute('data-mode');
    if (mode === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
function initMobileMenu() {
  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const panel = document.getElementById('mobileMenuPanel');
  if (!openBtn || !panel) return;

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.remove('open');
    });
  }

  const links = panel.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
    });
  });
}
function highlightActiveLink() {
  const rawPath = window.location.pathname.toLowerCase();
  const page = rawPath.split("/").pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links-new .nav-item-new, .nav-item-new');
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (!href) return;
    const linkPage = href.split("/").pop().toLowerCase();
    if (page === linkPage && linkPage !== '') {
      item.classList.add('active');
    } else if (rawPath.includes('/blogs/') && linkPage === 'blogs.html') {
      item.classList.add('active');
    } else if (rawPath.includes('/courses/') && linkPage === 'courses.html') {
      item.classList.add('active');
    } else if (rawPath.includes('/programs/') && linkPage === 'courses.html') {
      item.classList.add('active');
    }
  });
}
function initProgramsDropdown() {
  document.querySelectorAll('.nav-item-dropdown-wrapper').forEach(wrapper => {
    const triggerBtn = wrapper.querySelector('.nav-item-new');
    const panel = wrapper.querySelector('.dropdown-menu-panel');
    if (!triggerBtn || !panel) return;
    triggerBtn.addEventListener('click', (e) => {
      const isShowing = panel.classList.contains('show-dropdown');
      document.querySelectorAll('.dropdown-menu-panel').forEach(p => p.classList.remove('show-dropdown'));
      if (!isShowing) {
        e.preventDefault();
        e.stopPropagation();
        panel.classList.add('show-dropdown');
      }
    });
    panel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        panel.classList.remove('show-dropdown');
      });
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown-wrapper')) {
      document.querySelectorAll('.dropdown-menu-panel').forEach(p => p.classList.remove('show-dropdown'));
    }
  });
}
function autoApplyAnimations() {
  document.querySelectorAll('.section-title-container, .partners-section, .placement-tracker-teaser').forEach(el => {
    el.classList.add('reveal');
  });
  document.querySelectorAll('.hero h1, .hero-desc, .hero-btns, .hero-checkmarks, .hero-visual').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 150}ms`;
  });
  document.querySelectorAll('.section-subtitle, .section-title, .section-desc').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 100}ms`;
  });
  document.querySelectorAll('.grid-2, .grid-3, .grid-4').forEach(grid => {
    const cards = grid.querySelectorAll('.card, .partner-logo, .checkmark-item');
    cards.forEach((card, index) => {
      if (!card.classList.contains('reveal')) {
        card.classList.add('reveal');
        card.style.transitionDelay = `${(index % 4) * 150}ms`;
      }
    });
  });
  document.querySelectorAll('form .form-group, form .btn').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(index % 6) * 100}ms`;
  });
}
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .fade-in-up, .fade-in, .zoom-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });
  revealElements.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
  const dropdownContainers = document.querySelectorAll('.nav-item-dropdown');
  dropdownContainers.forEach(container => {
    const toggleBtn = container.querySelector('.dropdown-toggle-btn');
    const menu = container.querySelector('.programs-dropdown-menu');
    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isCurrentlyOpen = container.classList.contains('active');
        dropdownContainers.forEach(other => {
          other.classList.remove('active');
          const otherMenu = other.querySelector('.programs-dropdown-menu');
          if (otherMenu) otherMenu.classList.remove('show');
        });
        if (!isCurrentlyOpen) {
          container.classList.add('active');
          menu.classList.add('show');
        }
      });
    }
  });
  const categoryRows = document.querySelectorAll('.programs-dropdown-menu .dropdown-item-row');
  let categoryTimer = null;
  categoryRows.forEach(row => {
    const flyout = row.querySelector('.programs-sub-flyout');
    if (!flyout) return;
    const openCategory = () => {
      categoryRows.forEach(otherRow => {
        if (otherRow !== row) {
          otherRow.classList.remove('active', 'open');
        }
      });
      row.classList.add('active', 'open');
    };
    row.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; 
      e.stopPropagation();
      if (categoryTimer) clearTimeout(categoryTimer);
      const isOpen = row.classList.contains('open');
      if (isOpen) {
        row.classList.remove('active', 'open');
      } else {
        openCategory();
      }
    });
    row.addEventListener('mouseenter', () => {
      if (categoryTimer) clearTimeout(categoryTimer);
      categoryTimer = setTimeout(() => {
        openCategory();
      }, 350); 
    });
    row.addEventListener('mouseleave', () => {
      if (categoryTimer) clearTimeout(categoryTimer);
    });
  });
  document.querySelectorAll('.programs-dropdown-menu a, .programs-sub-flyout a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        window.location.href = href;
      }
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      dropdownContainers.forEach(container => {
        container.classList.remove('active');
        const menu = container.querySelector('.programs-dropdown-menu');
        if (menu) menu.classList.remove('show');
      });
      categoryRows.forEach(r => r.classList.remove('active', 'open'));
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownContainers.forEach(container => {
        container.classList.remove('active');
        const menu = container.querySelector('.programs-dropdown-menu');
        if (menu) menu.classList.remove('show');
      });
      categoryRows.forEach(r => r.classList.remove('active', 'open'));
    }
  });
});
function initNavbarScroll() {
  const container = document.querySelector('.nav-pill-container');
  const logoImg = document.querySelector('.logo-svg');
  if (!container) return;
  let isScrolling;
  const handleScroll = () => {
    if (window.scrollY > 20) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); 
}
function initStatsCountUp() {
  const statElements = document.querySelectorAll('.stat-number, .stat-card-title, .rating-big-num');
  const countUp = (el, targetValue, suffix) => {
    let start = 0;
    const duration = 1500; 
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);
      if (targetValue >= 1000) {
        el.innerText = currentValue.toLocaleString() + suffix;
      } else {
        el.innerText = currentValue + suffix;
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.innerText = targetValue.toLocaleString() + suffix;
      }
    };
    requestAnimationFrame(animate);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const rawText = el.innerText.trim();
        const numMatch = rawText.match(/^([0-9,.]+)s*(.*)$/);
        if (numMatch) {
          const numericPart = numMatch[1].replace(/,/g, '');
          const targetValue = parseFloat(numericPart);
          const suffix = numMatch[2] || '';
          if (!isNaN(targetValue)) {
            el.style.visibility = 'visible';
            countUp(el, targetValue, suffix);
            observer.unobserve(el);
          }
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  statElements.forEach(el => {
    observer.observe(el);
  });
}
function initLogoInteractivity() {
  const logoWrappers = document.querySelectorAll('.logo');
  logoWrappers.forEach(logo => {
    logo.style.transform = 'none';
    logo.style.filter = 'none';
  });
}
function init3DTiltController() {
  const tiltCards = document.querySelectorAll('.card-3d-effect, .hero-3d-tilt-card, .hero-3d-tilt-container');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  init3DTiltController();
});
function init3DBackgroundCanvas() {
  const canvas = document.getElementById('bg3dCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let time = 0;
  let rotationAngle = 0;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let orbs = [];
  const orbCount = 22;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initOrbs();
  }
  function initOrbs() {
    orbs = [];
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 55 + 25,
        speedY: Math.random() * 0.12 + 0.04,
        speedX: (Math.random() - 0.5) * 0.12,
        pulseSpeed: Math.random() * 0.01 + 0.004,
        alpha: Math.random() * 0.35 + 0.15,
        colorIndex: i % 5
      });
    }
  }
  window.addEventListener('resize', resize);
  resize();
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / width - 0.5) * 30;
    mouse.targetY = (e.clientY / height - 0.5) * 30;
  });
  function render() {
    if (window.innerWidth <= 768) {
      return; // Skip continuous heavy 3D particle rendering on mobile for 60fps scrolling
    }
    ctx.clearRect(0, 0, width, height);
    time += 0.005; // Ultra-slow smooth ambient step
    rotationAngle += 0.0004; // Slow continuous rotation
    mouse.x += (mouse.targetX - mouse.x) * 0.03;
    mouse.y += (mouse.targetY - mouse.y) * 0.03;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Multi-color Edvanta Logo Session Palette
    const logoColorPalette = isDark ? [
      'rgba(158, 188, 158, ', // Logo Sage Gray
      'rgba(118, 154, 133, ', // Logo Mineral Sage
      'rgba(82, 112, 96, ',   // Deep Forest Sage
      'rgba(180, 205, 184, ', // Soft Mint Sage
      'rgba(60, 78, 68, '     // Slate Shadow
    ] : [
      'rgba(158, 188, 158, ', // Logo Sage Gray
      'rgba(118, 154, 133, ', // Logo Mineral Sage
      'rgba(138, 168, 146, ', // Soft Sage
      'rgba(40, 50, 44, ',    // Logo Charcoal Slate
      'rgba(180, 205, 184, '  // Pearl Sage
    ];

    const gridColor = isDark ? 'rgba(158, 188, 158, 0.14)' : 'rgba(158, 188, 158, 0.12)';

    // Rotate entire canvas background slowly
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(rotationAngle);
    ctx.translate(-width / 2, -height / 2);

    for (let i = 0; i < orbs.length; i++) {
      const orb = orbs[i];
      orb.y -= orb.speedY;
      orb.x += orb.speedX;
      if (orb.y + orb.radius < 0) orb.y = height + orb.radius;
      if (orb.x < 0) orb.x = width;
      if (orb.x > width) orb.x = 0;
      
      const currentAlpha = orb.alpha + Math.sin(time * 1.5 + i) * 0.07;
      const gradient = ctx.createRadialGradient(
        orb.x + mouse.x * 0.4, orb.y + mouse.y * 0.4, 0,
        orb.x + mouse.x * 0.4, orb.y + mouse.y * 0.4, orb.radius * 1.5
      );
      
      const colorPrefix = logoColorPalette[i % logoColorPalette.length];
      gradient.addColorStop(0, colorPrefix + Math.max(0, currentAlpha) + ')');
      gradient.addColorStop(0.6, colorPrefix + (currentAlpha * 0.3) + ')');
      gradient.addColorStop(1, colorPrefix + '0)');
      
      ctx.beginPath();
      ctx.arc(orb.x + mouse.x * 0.4, orb.y + mouse.y * 0.4, orb.radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    const rows = 24;
    const cols = 28;
    const spacingX = width / (cols - 4);
    const spacingY = 32;
    const horizon = height * 0.55;
    ctx.lineWidth = isDark ? 1.2 : 1.0;
    for (let r = 0; r < rows; r++) {
      const perspectiveScale = Math.pow(r / rows, 1.8);
      const y = horizon + r * spacingY * (perspectiveScale + 0.2) + mouse.y * 0.3;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = (c - 2) * spacingX + (c - cols / 2) * perspectiveScale * 25 + mouse.x * 0.2;
        const wave = Math.sin(time + c * 0.2 + r * 0.15) * 12 * perspectiveScale;
        const drawY = y + wave;
        if (c === 0) {
          ctx.moveTo(x, drawY);
        } else {
          ctx.lineTo(x, drawY);
        }
      }
      ctx.strokeStyle = gridColor;
      ctx.stroke();
    }

    ctx.restore();
    requestAnimationFrame(render);
  }
  render();
}
document.addEventListener('DOMContentLoaded', () => {
  init3DBackgroundCanvas();
});
function initUniversalScrollReveal() {
  const elements = document.querySelectorAll('section, .card-3d-effect, .card, .program-card-item, .blog-card, .community-panel, .hero-skill-hub, footer');
  elements.forEach((el, index) => {
    if (!el.classList.contains('scroll-reveal')) {
      el.classList.add('scroll-reveal');
      if (el.parentElement && el.parentElement.children.length > 1) {
        const childIndex = Array.from(el.parentElement.children).indexOf(el);
        if (childIndex === 1) el.classList.add('delay-1');
        if (childIndex === 2) el.classList.add('delay-2');
        if (childIndex === 3) el.classList.add('delay-3');
        if (childIndex >= 4) el.classList.add('delay-4');
      }
    }
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
  initUniversalScrollReveal();
  initRequestDemoButtons();
});

function initRequestDemoButtons() {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScQnNse67qz9SkYDNQFTO2nY4hdeT7J0KqmyripVtCsrzDZ2g/viewform?usp=header';
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.btn-3d-embossed, [data-action="request-demo"], a[href*="docs.google.com/forms"]');
    if (target) {
      const text = target.innerText || target.textContent;
      if (text.toLowerCase().includes('request demo') || text.toLowerCase().includes('proceed to form') || target.classList.contains('btn-3d-embossed')) {
        if (!target.closest('a[href]')) {
          window.open(GOOGLE_FORM_URL, '_blank');
        }
      }
    }
  });
}