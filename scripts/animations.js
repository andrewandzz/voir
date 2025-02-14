animate(".welcome");
animate(".statistics");
animate(".options");
animate(".services button");

function animate(selectors) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activate");
      }
    });
  });

  observer.observe(document.querySelector(selectors));
}
