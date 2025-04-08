document.addEventListener("DOMContentLoaded", () => {
      // Scroll animation for all elements with class "fade-in-up"
      const faders = document.querySelectorAll('.fade-in-up');
    
      const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });
    
      faders.forEach(fader => {
        appearOnScroll.observe(fader);
      });
    
      // Additional JS features (optional):
      // Example: Auto-resize textarea on input
      const autoGrowTextareas = document.querySelectorAll("textarea");
      autoGrowTextareas.forEach(textarea => {
        textarea.addEventListener("input", () => {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        });
      });
    });
    