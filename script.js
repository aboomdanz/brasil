const address = document.querySelector('#btc-address').textContent.trim();
const copyButton = document.querySelector('#copy-address');
const copyStatus = document.querySelector('#copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(address);
    copyButton.innerHTML = '<span class="copy-icon">✓</span> copiado';
    copyStatus.textContent = 'Endereço copiado. Confira os primeiros e últimos caracteres antes de confirmar.';
    setTimeout(() => {
      copyButton.innerHTML = '<span class="copy-icon">▣</span> copiar';
      copyStatus.textContent = 'Confira sempre o endereço antes de confirmar. Transações em Bitcoin são irreversíveis.';
    }, 3200);
  } catch (error) {
    copyStatus.textContent = 'Não foi possível copiar automaticamente. Selecione o endereço manualmente.';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
