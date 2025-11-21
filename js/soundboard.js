const voiceSelect = document.getElementById('voice-select');

function playWinnerSound() {
  const voice = voiceSelect.value;
  const audio = new Audio(`assets/sounds/${voice}-winner.mp3`);
  audio.play();
}
