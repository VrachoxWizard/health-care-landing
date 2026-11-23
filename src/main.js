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

  // 2. Testimonial Pagination Dots
  const dots = document.querySelectorAll('#testimonials button[aria-label^="Slide"]');
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => {
        d.classList.remove('w-2.5', 'h-2.5', 'bg-white', 'shadow-sm');
        d.classList.add('w-2', 'h-2', 'bg-white/40');
      });
      dot.classList.remove('w-2', 'h-2', 'bg-white/40');
      dot.classList.add('w-2.5', 'h-2.5', 'bg-white', 'shadow-sm');
    });
  });

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
