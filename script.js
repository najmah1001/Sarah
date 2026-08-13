let messageIndex = 0;

function initHome() {
  document.title = CONFIG.question;
  document.getElementById("gif").src = CONFIG.gif;
  document.getElementById("question").textContent = CONFIG.question;
  const yes = document.querySelector(".yes-button");
  const no = document.querySelector(".no-button");
  yes.textContent = CONFIG.yesText;
  no.textContent = CONFIG.noText;
  yes.addEventListener("click", () => (window.location.href = "yes_page.html"));
  no.addEventListener("click", () => handleNoClick(yes, no));
}

function handleNoClick(yesButton, noButton) {
  noButton.textContent = CONFIG.noMessages[messageIndex];
  messageIndex = (messageIndex + 1) % CONFIG.noMessages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  if (currentSize < 90) yesButton.style.fontSize = `${currentSize * 1.35}px`;
}

function initYes() {
  document.title = CONFIG.yesTitle;
  document.getElementById("gif").src = CONFIG.yesGif;
  document.getElementById("yes-title").textContent = CONFIG.yesTitle;
  document.getElementById("yes-message").textContent = CONFIG.yesMessage;
  document.getElementById("back").textContent = CONFIG.backText;
  setInterval(rainHeart, 300);
}

function rainHeart() {
  const el = document.createElement("div");
  el.className = "heart";
  el.textContent = ["❤️", "💖", "💕", "🌸"][Math.floor(Math.random() * 4)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6500);
}
