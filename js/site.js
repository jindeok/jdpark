(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navigation?.classList.toggle("is-open", !isOpen);
  });
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggle?.setAttribute("aria-expanded", "false");
      navigation?.classList.remove("is-open");
      toggle?.focus();
    }
  });
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  const items = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    items.forEach((item) => observer.observe(item));
  }
})();
