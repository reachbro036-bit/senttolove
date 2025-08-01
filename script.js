// 🌟 Generate stars
const starContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('span');
  const size = Math.random() * 2 + 1 + 'px';
  star.style.width = size;
  star.style.height = size;
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.animationDuration = Math.random() * 2 + 1 + 's';
  starContainer.appendChild(star);
}

// ☄️ Meteor
const meteor = document.createElement('div');
meteor.classList.add('shooting-star');
document.body.appendChild(meteor);

// 🎵 Lo-fi music
const bgMusic = document.getElementById('bgMusic');
function tryPlayMusic() {
  bgMusic.play().catch(() => {
    window.addEventListener('click', () => {
      bgMusic.play();
    }, { once: true });
  });
}
window.addEventListener('DOMContentLoaded', tryPlayMusic);

// 💥 Heart burst
const bigHeart = document.querySelector('.big-heart');
bigHeart.addEventListener('animationend', () => {
  for (let i = 0; i < 10; i++) {
    const burst = document.createElement('div');
    burst.classList.add('burst-heart');
    burst.textContent = '💖';
    burst.style.left = '50%';
    burst.style.top = '50%';
    burst.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    burst.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1000);
  }

  // 💌 Popup after heart burst
  setTimeout(() => {
    document.getElementById('lovePopup').classList.remove('hidden');
    document.getElementById('popupName').textContent = "Sent To Oun Seav Hong 💘";
    typeWriter("You make my heart smile every single day. This moment is just a small spark of what I feel for you ...", "popupMessage", 40);
  }, 1500);
});

// ✍️ Typewriter
function typeWriter(text, elementId, delay = 50) {
  const el = document.getElementById(elementId);
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}
