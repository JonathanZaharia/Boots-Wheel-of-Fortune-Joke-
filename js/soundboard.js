const voiceSelect=document.getElementById('voice-select');
function playWinnerSound(){
  const tone=new AudioContext();
  const o=tone.createOscillator();
  o.type='square';
  o.frequency.setValueAtTime(500+Math.random()*200, tone.currentTime);
  o.connect(tone.destination);
  o.start();
  o.stop(tone.currentTime+0.2);
}
