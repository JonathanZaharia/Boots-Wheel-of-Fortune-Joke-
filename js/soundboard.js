function playWinnerSound(){
  const ctx=new (window.AudioContext||window.webkitAudioContext)();
  const o=ctx.createOscillator(); o.type='square';
  o.frequency.setValueAtTime(500+Math.random()*300,ctx.currentTime);
  o.connect(ctx.destination); o.start(); o.stop(ctx.currentTime+0.2);
}
