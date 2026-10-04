// router.js
import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { KontakPage } from "./pages/KontakPage.js";
import { EkskulPage } from "./pages/EkskulPage.js";

const routes = {
  "/": () => new HomePage({ activePage: "home" }).render(),
  "/about": () => new AboutPage({ activePage: "about" }).render(),
  "/kontak": () => new KontakPage({ activePage: "kontak" }).render(),
  "/ekskul": () => new EkskulPage({ activePage: "ekskul" }).render(),
};

export function router() {
  const path = window.location.hash.slice(1) || "/";
  const renderPage = routes[path] || (() => "<h1>404 - Halaman Tidak Ditemukan</h1>");
  document.getElementById("app").innerHTML = renderPage();
}