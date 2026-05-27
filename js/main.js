(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var headerActions = document.querySelector(".header-actions");
  var nav = document.querySelector(".site-nav");
  var isJapanese = document.documentElement.lang === "ja";
  var menuOpenLabel = isJapanese ? "メニューを開く" : "Open menu";
  var menuCloseLabel = isJapanese ? "メニューを閉じる" : "Close menu";

  if (toggle && headerActions) {
    toggle.addEventListener("click", function () {
      var isOpen = headerActions.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? menuCloseLabel : menuOpenLabel);
    });

    headerActions.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        headerActions.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", menuOpenLabel);
      });
    });
  }

  // Publication filters
  var filterBtns = document.querySelectorAll(".filter-btn");
  var pubItems = document.querySelectorAll(".pub-item");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;

      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      pubItems.forEach(function (item) {
        if (filter === "all" || item.dataset.type === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // Highlight active nav link on scroll
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".site-nav a");

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              link.style.color =
                link.getAttribute("href") === "#" + id
                  ? "var(--color-accent)"
                  : "";
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
