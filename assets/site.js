
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".contact-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const success = form.querySelector(".success");
      if (success) success.classList.add("show");
      form.reset();
      success?.scrollIntoView({behavior:"smooth", block:"center"});
    });
  });
});
