const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");
const result = document.getElementById("result");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const tinyNote = document.getElementById("tinyNote");
const card = document.querySelector(".card");

const FLEE_THRESHOLD = 100; // px – cursor this close and the No button runs
const PAD = 16;

function popConfetti() {
  const emojis = ["💘", "💗", "💖", "💞", "✨", "🥰"];
  for (let i = 0; i < 42; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.position = "fixed";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "-20px";
    s.style.fontSize = 14 + Math.random() * 18 + "px";
    s.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translateY(${110 + Math.random() * 30}vh) rotate(${Math.random() * 360}deg)`;
      s.style.opacity = "0";
    });

    setTimeout(() => s.remove(), 1300);
  }
}

function moveNoButtonAway(cursorX, cursorY) {
  const cardRect = card.getBoundingClientRect();
  const minDistFromCursor = 120;
  let x, y;

  for (let i = 0; i < 20; i++) {
    x = cardRect.left + PAD + Math.random() * (cardRect.width - noBtn.offsetWidth - 2 * PAD);
    y = cardRect.top + PAD + Math.random() * (cardRect.height - noBtn.offsetHeight - 2 * PAD);
    const btnCenterX = x + noBtn.offsetWidth / 2;
    const btnCenterY = y + noBtn.offsetHeight / 2;
    if (Math.hypot(cursorX - btnCenterX, cursorY - btnCenterY) >= minDistFromCursor) break;
  }

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

document.addEventListener("mousemove", (e) => {
  if (!result.classList.contains("hidden")) return;
  if (yesBtn.disabled) return;

  const rect = noBtn.getBoundingClientRect();
  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;
  const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

  if (dist < FLEE_THRESHOLD) {
    moveNoButtonAway(e.clientX, e.clientY);
  }
});

// Try both possible image filenames (with/without underscore)
const photoImg = document.getElementById("valentinePhoto");
if (photoImg) {
  photoImg.addEventListener("error", function tryAlternateSrc() {
    if (this.dataset.tried) return;
    this.dataset.tried = "1";
    this.src = this.src.includes("_") ? "IMG2454.JPG" : "IMG_2454.JPG";
  });
}

yesBtn.addEventListener("click", () => {
  popConfetti();
  title.textContent = "Correct answer ✅💗";
  subtitle.textContent = "I guess that degree was worth it";

  result.classList.remove("hidden");
  yesBtn.disabled = true;
  noBtn.disabled = true;
  noBtn.classList.add("hidden-after-yes");
  noBtn.style.display = "none";
  if (tinyNote) tinyNote.classList.add("hidden-after-yes");
});

againBtn.addEventListener("click", () => {
  title.textContent = "Will you be my Valentine? 💘";
  subtitle.textContent = "I'm like kinda in love with u so i made u a website :)"  
  result.classList.add("hidden");
  yesBtn.disabled = false;
  noBtn.disabled = false;
  noBtn.classList.remove("hidden-after-yes");
  noBtn.style.position = "";
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.display = "";
  if (tinyNote) tinyNote.classList.remove("hidden-after-yes");
});
