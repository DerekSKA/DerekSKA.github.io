// js/ui.js

// ===== NAV (mobile) =====
const navToggle = document.getElementById("navToggle") || document.querySelector(".nav__toggle");
const navLinks  = document.getElementById("navLinks")  || document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al hacer click en un link (en mobile queda más pro)
  navLinks.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    if (navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}


// ===== GALERÍA: filtros =====
const filterButtons = document.querySelectorAll(".filter");
const shots = document.querySelectorAll(".shot");

function setActiveFilterUI(activeBtn){
  filterButtons.forEach(b => {
    b.classList.remove("is-active");
    b.setAttribute("aria-selected", "false");
    b.setAttribute("tabindex", "-1");
  });
  activeBtn.classList.add("is-active");
  activeBtn.setAttribute("aria-selected", "true");
  activeBtn.setAttribute("tabindex", "0");
}

function applyFilter(filter){
  shots.forEach(card => {
    const cat = card.dataset.cat; // makeup | skincare | nails
    const show = (filter === "all" || cat === filter);

    // mejor que display: none; (accesible y consistente)
    card.hidden = !show;
  });
}

if (filterButtons.length && shots.length) {
  filterButtons.forEach(btn => {
    // mejora semántica si quieres mantener role="tab"
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", btn.classList.contains("is-active") ? "true" : "false");
    btn.setAttribute("tabindex", btn.classList.contains("is-active") ? "0" : "-1");

    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter; // all | makeup | skincare | nails
      if (!filter) return;

      setActiveFilterUI(btn);
      applyFilter(filter);
    });
  });

  // asegura que al cargar, respete el activo inicial
  const initial = document.querySelector(".filter.is-active") || filterButtons[0];
  setActiveFilterUI(initial);
  applyFilter(initial.dataset.filter || "all");
}
