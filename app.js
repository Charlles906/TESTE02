document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.getElementById('word-input');
  const showWordBtn = document.getElementById('show-word-btn');
  const output = document.getElementById('output');

  showWordBtn.addEventListener('click', () => {
      const word = wordInput.value.trim();
      if (word !== '') {
          output.textContent = `Você digitou: ${word}`;
      } else {
          output.textContent = '';
      }
  });
});
