import { useEffect } from 'react';

export const useScrollObserver = () => {
  useEffect(() => {
    // Check for browser support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    const scanAndObserve = () => {
      const targets = document.querySelectorAll('.scroll-reveal:not(.is-revealed)');
      targets.forEach((target) => observer.observe(target));
    };

    scanAndObserve();

    // Observe future dynamically mounted cards or tab switches
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
