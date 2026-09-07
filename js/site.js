(() => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

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
    if (event.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
      toggle?.setAttribute("aria-expanded", "false");
      navigation?.classList.remove("is-open");
      toggle?.focus();
    }
  });
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
