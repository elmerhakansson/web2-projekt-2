document.addEventListener("DOMContentLoaded", () => {
  // FADE IN on page load
  document.body.classList.add("fade-in");
  requestAnimationFrame(() => {
    document.body.classList.add("show");
  });

  // Handle all internal links
  const links = document.querySelectorAll('a[href$=".html"]');

  links.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Trigger fade-out
        document.body.classList.add("fade-out");

        // Force browser to recognize the change (reflow)
        document.body.offsetHeight; // <-- this line is critical

        // Navigate after fade duration
        setTimeout(() => {
          window.location.href = href;
        }, 500); // must match CSS transition duration
      });
    }
  });
});