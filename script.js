const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const tinyNote = document.getElementById("tinyNote");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;
  const msgs = [
    "Try clicking “No” 😉",
    "Wait… are you sure? 😭",
    "Ok that’s rude.",
    "I literally made a website???",
    "Last chance 😳"
  ];
  tinyNote.textContent = msgs[Math.min(noCount, msgs.length - 1)];
  yesBtn.style.transform = `scale(${1 + Math.min(noCount * 0.15, 1.0)})`;
});

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  tinyNote.textContent = "Correct answer ✅";
  yesBtn.disabled = true;
  noBtn.disabled = true;
});
