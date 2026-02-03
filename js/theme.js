// js/theme.js
const btns = document.querySelectorAll("[data-theme-btn]");

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function initTheme(){
  const saved = localStorage.getItem("theme");
  const current = saved || document.documentElement.getAttribute("data-theme") || "rose";
  setTheme(current);
}

if (btns.length){
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.themeBtn;
      if (!theme) return;
      setTheme(theme);
    });
  });
}

initTheme();
