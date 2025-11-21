function triggerStageEvent(event) {
  const stage = document.getElementById('stage-panel');
  stage.innerHTML = event;
  stage.classList.add('show');
  setTimeout(() => stage.classList.remove('show'), 2000);
}
