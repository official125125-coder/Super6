
/* SUPER6 - GAME PROVIDER POPUP */

const games = [
  { name: "918KISS ORI", image: "images/918kissori.png" },
  { name: "MEGA888", image: "images/mega888.png" },
  { name: "NEWTOWN", image: "images/newtown.png" },
  { name: "ROLLEX11", image: "images/rollex11.png" },
  { name: "PUSSY888", image: "images/pussy888.png" },
  { name: "GREATWALL99", image: "images/greatwall99.png" },
  { name: "JOKER", image: "images/joker.png" },
  { name: "LIONKING", image: "images/lionking.png" },
  { name: "PLAYBOY2", image: "images/playboy2.png" },
  { name: "LIVE22", image: "images/live22.png" },
  { name: "918KAYA", image: "images/918kaya.png" }
];

const gameGrid = document.getElementById("gameGrid");
const modal = document.getElementById("gameModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalGameName = document.getElementById("modalGameName");
const modalGameLogo = document.getElementById("modalGameLogo");
const modalLogoFallback = document.getElementById("modalLogoFallback");

let previousFocus = null;
let imageRequest = 0;

/* GAME CARD GENERATOR */

games.forEach((game) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "game-card";
  card.setAttribute("aria-label", "Contact for " + game.name);

  const logoBox = document.createElement("div");
  logoBox.className = "game-logo-box";

  const image = document.createElement("img");
  image.className = "game-logo";
  image.alt = game.name;
  image.src = game.image;

  const fallback = document.createElement("div");
  fallback.className = "default-game-logo";
  fallback.textContent = "🎰";

  image.addEventListener("error", () => {
    image.style.display = "none";
    fallback.style.display = "grid";
  });

  image.addEventListener("load", () => {
    image.style.display = "block";
    fallback.style.display = "none";
  });

  logoBox.appendChild(image);
  logoBox.appendChild(fallback);

  const name = document.createElement("div");
  name.className = "game-name";
  name.textContent = game.name;

  const clickText = document.createElement("div");
  clickText.className = "game-click";
  clickText.textContent = "CLICK TO CONTACT";

  card.appendChild(logoBox);
  card.appendChild(name);
  card.appendChild(clickText);

  card.addEventListener("click", () => {
    openModal(game);
  });

  gameGrid.appendChild(card);
});

/* PROVIDER LOGO IN POPUP */

function openModal(game) {
  previousFocus = document.activeElement;

  modalGameName.textContent = game.name;

  const requestId = ++imageRequest;

  // Reset previous provider image.
  modalGameLogo.style.display = "none";
  modalLogoFallback.style.display = "none";
  modalGameLogo.removeAttribute("src");

  modalGameLogo.alt = game.name;

  // Preload the selected provider logo.
  const loader = new Image();

  loader.onload = () => {
    if (requestId !== imageRequest) return;

    modalGameLogo.src = game.image;
    modalGameLogo.style.display = "block";
    modalLogoFallback.style.display = "none";
  };

  loader.onerror = () => {
    if (requestId !== imageRequest) return;

    modalGameLogo.style.display = "none";
    modalLogoFallback.style.display = "grid";
  };

  loader.src = game.image;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalClose.focus();
}

/* CLOSE POPUP */

function closeModal() {
  if (!modal.classList.contains("active")) return;

  imageRequest++;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (previousFocus && previousFocus.focus) {
    previousFocus.focus();
  }
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "Tab") {
    const focusable = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), a[href]'
      )
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* HEADER SHADOW */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 20
    ? "0 10px 35px rgba(0,0,0,.38)"
    : "none";
}, { passive: true });
