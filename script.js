const games = [

  {
    name: "918KISS ORI",
    image: "images/918kissori.png"
  },

  {
    name: "MEGA888",
    image: "images/mega888.png"
  },

  {
    name: "NEWTOWN",
    image: "images/newtown.png"
  },

  {
    name: "ROLLEX11",
    image: "images/rollex11.png"
  },

  {
    name: "PUSSY888",
    image: "images/pussy888.png"
  },

  {
    name: "GREATWALL99",
    image: "images/greatwall99.png"
  },

  {
    name: "JOKER",
    image: "images/joker.png"
  },

  {
    name: "LIONKING",
    image: "images/lionking.png"
  },

  {
    name: "PLAYBOY2",
    image: "images/playboy2.png"
  },

  {
    name: "LIVE22",
    image: "images/live22.png"
  },

  {
    name: "918KAYA",
    image: "images/918kaya.png"
  }

];


/* ===========================
   SUPER6 LINKS
=========================== */

const whatsappCS =
  "https://wa.link/wm4yy0";

const whatsappChannel =
  "https://wa.link/wm4yy0";

const telegramCS =
  "https://t.me/VipSuper6";

const telegramChannel =
  "https://t.me/Super6gaming";


/* ELEMENT */

const gameGrid =
  document.getElementById("gameGrid");

const modal =
  document.getElementById("gameModal");

const modalClose =
  document.getElementById("modalClose");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const modalGameName =
  document.getElementById("modalGameName");


/* ===========================
   CREATE GAME
=========================== */

games.forEach(game => {

  const card =
    document.createElement("div");

  card.className =
    "game-card";


  card.innerHTML = `

    <div class="game-logo-box">

      <img
        src="${game.image}"
        alt="${game.name}"
        class="game-logo"
      >

      <div class="default-game-logo">
        🎰
      </div>

    </div>


    <div class="game-name">
      ${game.name}
    </div>


    <div class="game-click">
      CLICK TO CONTACT
    </div>

  `;


  const image =
    card.querySelector(
      ".game-logo"
    );

  const fallback =
    card.querySelector(
      ".default-game-logo"
    );


  /* AUTO DEFAULT LOGO */

  image.addEventListener(
    "error",
    () => {

      image.style.display =
        "none";

      fallback.style.display =
        "grid";

    }
  );


  image.addEventListener(
    "load",
    () => {

      image.style.display =
        "block";

      fallback.style.display =
        "none";

    }
  );


  /* OPEN POPUP */

  card.addEventListener(
    "click",
    () => {

      openModal(
        game.name
      );

    }
  );


  gameGrid.appendChild(card);

});


/* ===========================
   OPEN POPUP
=========================== */

function openModal(gameName){

  modalGameName.textContent =
    gameName;

  modal.classList.add(
    "active"
  );

  document.body.classList.add(
    "modal-open"
  );

}


/* ===========================
   CLOSE POPUP
=========================== */

function closeModal(){

  modal.classList.remove(
    "active"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


modalClose.addEventListener(
  "click",
  closeModal
);


modalBackdrop.addEventListener(
  "click",
  closeModal
);


/* ESC CLOSE */

document.addEventListener(
  "keydown",
  event => {

    if(
      event.key === "Escape"
    ){

      closeModal();

    }

  }
);