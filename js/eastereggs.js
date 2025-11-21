let clickCount=0;
gremlins.forEach(g=>{
  g.addEventListener('click',()=>{
    clickCount++;
    if(clickCount>=10){
      triggerStageEvent('💥 DRAMATIC ERROR: Secret Boot Appears! 💥');
      clickCount=0;
    }
  });
});
