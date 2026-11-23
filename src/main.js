// Health Flex Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Lab Tests Tab Switching
  const tabButtons = document.querySelectorAll('.lab-tab-btn');
  const tabPanels = document.querySelectorAll('.lab-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all buttons
      tabButtons.forEach(b => {
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
        b.classList.remove('text-brand-navy', 'border-b-2', 'border-brand-gold');
        b.classList.add('text-[#8ea0b4]');
      });

      // Activate clicked button
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');
      btn.classList.add('text-brand-navy', 'border-b-2', 'border-brand-gold');
      btn.classList.remove('text-[#8ea0b4]');

      // Hide all panels
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });

      // Show target panel
      const targetPanelId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });

  // Keyboard navigation for tabs (ArrowLeft, ArrowRight)
  const tabList = document.querySelector('[role="tablist"]');
  if (tabList) {
    tabList.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabButtons);
      const index = tabs.indexOf(document.activeElement);
      if (index === -1) return;

      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  }

  // 2. Testimonial Carousel Controller
  const carouselContainer = document.getElementById('testimonials-carousel');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.getElementById('testimonials-prev');
  const nextBtn = document.getElementById('testimonials-next');

  if (carouselContainer && slides.length > 0) {
    let currentSlide = 0;
    let autoSlideInterval = null;

    function goToSlide(index) {
      if (index < 0) {
        currentSlide = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      // Update slides
      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.remove('opacity-0', 'pointer-events-none', 'absolute', 'translate-x-8', '-translate-x-8');
          slide.classList.add('opacity-100', 'translate-x-0', 'relative');
        } else {
          slide.classList.remove('opacity-100', 'translate-x-0', 'relative');
          slide.classList.add('opacity-0', 'pointer-events-none', 'absolute', idx > currentSlide ? 'translate-x-8' : '-translate-x-8');
        }
      });

      // Update dots
      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.remove('w-2', 'h-2', 'bg-white/40');
          dot.classList.add('w-2.5', 'h-2.5', 'bg-white', 'shadow-sm');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('w-2.5', 'h-2.5', 'bg-white', 'shadow-sm');
          dot.classList.add('w-2', 'h-2', 'bg-white/40');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startAutoSlide();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-slide-to'), 10);
        if (!isNaN(targetIndex)) {
          goToSlide(targetIndex);
          startAutoSlide();
        }
      });
    });

    // Pause auto-sliding on hover
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);

    // Initial start
    startAutoSlide();
  }

  // Quick consultancy form submission feedback
  const quickForm = document.getElementById('quick-consultancy-form');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = quickForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Booking Requested ✓';
      submitBtn.disabled = true;
      submitBtn.classList.add('bg-emerald-600');

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-emerald-600');
        quickForm.reset();
      }, 3500);
    });
  }

  // Free consultancy CTA form submission feedback
  const ctaForm = document.getElementById('free-consultancy-cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = ctaForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitted ✓';
      submitBtn.disabled = true;
      submitBtn.classList.add('bg-emerald-600');

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-emerald-600');
        ctaForm.reset();
      }, 3500);
    });
  }
});
