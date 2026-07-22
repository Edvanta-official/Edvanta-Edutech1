
/* Instant Theme Execution on Script Load */
(function applyEarlyTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();

/* main.js - Client-Side Interactivity for Edvanta Platform */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  highlightActiveLink();
  autoApplyAnimations();
  initScrollReveal();
  initNavbarScroll();
  initStatsCountUp();
  initLogoInteractivity();
});

/* 1. Theme Toggle & Persistence Setup */
function initTheme() {
  const toggler = document.getElementById('themeToggler');
  if (!toggler) return;

  const htmlEl = document.documentElement;
  
  // Get saved theme or fallback to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Apply initial theme
  htmlEl.setAttribute('data-theme', initialTheme);
  updateThemeActiveState(initialTheme);

  // Bind click handlers to theme-btn elements
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

/* 2. Mobile Responsive Navigation Menu Drawer */
function initMobileMenu() {
  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const panel = document.getElementById('mobileMenuPanel');
  
  if (!openBtn || !panel) return;

  const togglePanel = () => {
    panel.classList.toggle('open');
    // Swap icons if buttons are separate
    if (panel.classList.contains('open')) {
      openBtn.style.display = 'none';
      if (closeBtn) closeBtn.style.display = 'block';
    } else {
      openBtn.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'none';
    }
  };

  openBtn.addEventListener('click', togglePanel);
  if (closeBtn) {
    closeBtn.addEventListener('click', togglePanel);
  }

  // Handle mobile menu close when clicking links
  const links = panel.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      openBtn.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'none';
    });
  });
}

/* 3. Highlight Current Page in Navigation Menu Bar */
function highlightActiveLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  const desktopNavItems = document.querySelectorAll('.desktop-menu .nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-menu-panel a');

  const updateActiveState = (items) => {
    let matched = false;
    
    items.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (!href) return;
      
      const linkPage = href.split("/").pop();
      
      if (page === linkPage && linkPage !== '') {
        item.classList.add('active');
        matched = true;
      }
    });

    // If no page matched, default first item (Home / index.html) to active
    if (!matched && items.length > 0) {
      // Find home link
      items.forEach(item => {
        const href = item.getAttribute('href');
        if (href === 'index.html' || href === '#' || href === './') {
          item.classList.add('active');
        }
      });
    }
  };

  updateActiveState(desktopNavItems);
}

/* 4. Auto-Apply Scroll Reveal Classes to Grid Cards and Section Elements */
function autoApplyAnimations() {
  // Add reveal class to main structural containers
  document.querySelectorAll('.section-title-container, .partners-section, .placement-tracker-teaser').forEach(el => {
    el.classList.add('reveal');
  });

  // Hero animations
  document.querySelectorAll('.hero h1, .hero-desc, .hero-btns, .hero-checkmarks, .hero-visual').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 150}ms`;
  });

  // Section headings & descriptions
  document.querySelectorAll('.section-subtitle, .section-title, .section-desc').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 100}ms`;
  });

  // Staggered reveal for grid elements
  document.querySelectorAll('.grid-2, .grid-3, .grid-4').forEach(grid => {
    const cards = grid.querySelectorAll('.card, .partner-logo, .checkmark-item');
    cards.forEach((card, index) => {
      if (!card.classList.contains('reveal')) {
        card.classList.add('reveal');
        card.style.transitionDelay = `${(index % 4) * 150}ms`;
      }
    });
  });

  // Form group items inside standard forms
  document.querySelectorAll('form .form-group, form .btn').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(index % 6) * 100}ms`;
  });
}

/* 5. Initialize IntersectionObserver for Scroll Animations */
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

/* --- Clean Navigation Dropdown & Category Sub-Flyout Accordion System --- */
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

        // Close all dropdowns
        dropdownContainers.forEach(other => {
          other.classList.remove('active');
          const otherMenu = other.querySelector('.programs-dropdown-menu');
          if (otherMenu) otherMenu.classList.remove('show');
        });

        // Toggle current
        if (!isCurrentlyOpen) {
          container.classList.add('active');
          menu.classList.add('show');
        }
      });
    }
  });

  /* Category Item Accordion with 350ms Smooth Delay */
  const categoryRows = document.querySelectorAll('.programs-dropdown-menu .dropdown-item-row');
  let categoryTimer = null;

  categoryRows.forEach(row => {
    const flyout = row.querySelector('.programs-sub-flyout');
    if (!flyout) return;

    const openCategory = () => {
      // Single category open rule: close all other category flyouts
      categoryRows.forEach(otherRow => {
        if (otherRow !== row) {
          otherRow.classList.remove('active', 'open');
        }
      });

      // Smoothly expand active category
      row.classList.add('active', 'open');
    };

    // Click handler for instant/explicit activation with accordion enforcement
    row.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Allow actual links to navigate
      e.stopPropagation();

      if (categoryTimer) clearTimeout(categoryTimer);

      const isOpen = row.classList.contains('open');
      if (isOpen) {
        row.classList.remove('active', 'open');
      } else {
        openCategory();
      }
    });

    // Hover handler with 350ms delay
    row.addEventListener('mouseenter', () => {
      if (categoryTimer) clearTimeout(categoryTimer);
      categoryTimer = setTimeout(() => {
        openCategory();
      }, 350); // 350ms smooth delay as required
    });

    row.addEventListener('mouseleave', () => {
      if (categoryTimer) clearTimeout(categoryTimer);
    });
  });

  // Ensure links inside sub-flyouts navigate normally
  document.querySelectorAll('.programs-dropdown-menu a, .programs-sub-flyout a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        window.location.href = href;
      }
    });
  });

  // Close dropdown when clicking outside or pressing Escape
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

/* 6. Dynamic Header Scroll Shrink & Logo Scaling */
function initNavbarScroll() {
  const container = document.querySelector('.nav-pill-container');
  const logoImg = document.querySelector('.logo-svg');
  
  if (!container) return;

  let isScrolling;

  const handleScroll = () => {
    // 1. Manage navbar sizing and logo base state based on vertical scroll offset
    if (window.scrollY > 20) {
      container.classList.add('scrolled');
      if (logoImg && !logoImg.dataset.activeScrolling) {
        logoImg.style.transform = 'scale(0.9)';
      }
    } else {
      container.classList.remove('scrolled');
      if (logoImg && !logoImg.dataset.activeScrolling) {
        logoImg.style.transform = 'scale(1)';
      }
    }

    // 2. Manage active scrolling micro-scale (scale down during scroll activity)
    if (logoImg) {
      logoImg.dataset.activeScrolling = "true";
      window.clearTimeout(isScrolling);
      
      const targetScrollingScale = window.scrollY > 20 ? 0.83 : 0.92;
      logoImg.style.transform = `scale(${targetScrollingScale})`;

      isScrolling = setTimeout(() => {
        delete logoImg.dataset.activeScrolling;
        const targetBaseScale = window.scrollY > 20 ? 0.9 : 1.0;
        logoImg.style.transform = `scale(${targetBaseScale})`;
      }, 150);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initially
}

/* 7. Statistics Numbers Intersection Count-Up Animation */
function initStatsCountUp() {
  const statElements = document.querySelectorAll('.stat-number, .stat-card-title, .rating-big-num');
  
  const countUp = (el, targetValue, suffix) => {
    let start = 0;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);
      
      // Format number with comma if needed
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
        
        // Match numbers, decimals, commas, and capture trailing letters like L+, +, %, etc.
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

/* 8. Premium Interactive 3D Logo Tilt and Glow */
function initLogoInteractivity() {
  const logoWrappers = document.querySelectorAll('.logo');

  logoWrappers.forEach(logo => {
    logo.addEventListener('mousemove', (e) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate gentle 3D tilt (max 10 degrees)
      const rotateX = ((centerY - y) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      logo.style.filter = 'drop-shadow(0 0 16px rgba(56, 189, 248, 0.45)) drop-shadow(0 0 4px rgba(34, 197, 94, 0.25))';
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      logo.style.filter = '';
    });
  });
}

/* --- Real-Time Interactive 3D Mouse Tilt Controller --- */
function init3DTiltController() {
  const tiltCards = document.querySelectorAll('.card-3d-effect, .hero-3d-tilt-card, .hero-3d-tilt-container');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (-10deg to +10deg)
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


/* --- 3D Holographic Grid Wave & Floating Light Orbs Engine --- */
function init3DBackgroundCanvas() {
  const canvas = document.getElementById('bg3dCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let time = 0;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  // Floating 3D Orbs
  let orbs = [];
  const orbCount = 18;

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
        radius: Math.random() * 40 + 20,
        speedY: Math.random() * 0.4 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        alpha: Math.random() * 0.4 + 0.15
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / width - 0.5) * 40;
    mouse.targetY = (e.clientY / height - 0.5) * 40;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    time += 0.02;

    // Smooth mouse tilt easing
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Color palettes
    const gridColor = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)';
    const orbColor1 = isDark ? 'rgba(56, 189, 248, ' : 'rgba(37, 99, 235, ';
    const orbColor2 = isDark ? 'rgba(139, 92, 246, ' : 'rgba(2, 132, 199, ';

    // 1. Draw 3D Floating Orbs with Soft Radial Halos
    for (let i = 0; i < orbs.length; i++) {
      const orb = orbs[i];
      orb.y -= orb.speedY;
      orb.x += orb.speedX;

      if (orb.y + orb.radius < 0) orb.y = height + orb.radius;
      if (orb.x < 0) orb.x = width;
      if (orb.x > width) orb.x = 0;

      const currentAlpha = orb.alpha + Math.sin(time * 2 + i) * 0.08;
      const gradient = ctx.createRadialGradient(
        orb.x + mouse.x * 0.5, orb.y + mouse.y * 0.5, 0,
        orb.x + mouse.x * 0.5, orb.y + mouse.y * 0.5, orb.radius * 1.5
      );

      const colorChoice = i % 2 === 0 ? orbColor1 : orbColor2;
      gradient.addColorStop(0, colorChoice + Math.max(0, currentAlpha) + ')');
      gradient.addColorStop(0.6, colorChoice + (currentAlpha * 0.3) + ')');
      gradient.addColorStop(1, colorChoice + '0)');

      ctx.beginPath();
      ctx.arc(orb.x + mouse.x * 0.5, orb.y + mouse.y * 0.5, orb.radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // 2. Draw 3D Isometric Holographic Wave Grid
    const rows = 24;
    const cols = 28;
    const spacingX = width / (cols - 4);
    const spacingY = 32;
    const horizon = height * 0.55;

    ctx.lineWidth = isDark ? 1.2 : 1.0;

    for (let r = 0; r < rows; r++) {
      const perspectiveScale = Math.pow(r / rows, 1.8);
      const y = horizon + r * spacingY * (perspectiveScale + 0.2) + mouse.y * 0.4;

      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = (c - 2) * spacingX + (c - cols / 2) * perspectiveScale * 25 + mouse.x * 0.3;
        
        // 3D Wave Undulation
        const wave = Math.sin(time + c * 0.3 + r * 0.2) * 14 * perspectiveScale;
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

    requestAnimationFrame(render);
  }

  render();
}

document.addEventListener('DOMContentLoaded', () => {
  init3DBackgroundCanvas();
});

/* --- Universal IntersectionObserver Scroll Reveal Engine --- */
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
});
