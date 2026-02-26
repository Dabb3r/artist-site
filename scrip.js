const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const sigEl = document.getElementById("signal");
function tickSignal() {
  if (!sigEl) return;
  const n = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
  sigEl.textContent = `SIG: ${n}`;
}
tickSignal();
setInterval(tickSignal, 900);