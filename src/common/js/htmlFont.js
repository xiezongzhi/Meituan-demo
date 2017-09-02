var timer;
window.onresize = ()=>{
  clearTimeout(timer);
  timer = setTimeout(()=>{
    setFontSize();
  }, 500)
};

setFontSize=()=>{
  document.getElementsByTagName('html')[0].style.fontSize = window.screen.width / 10 + 'px';
};
setFontSize();


