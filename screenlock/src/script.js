var fullscreen = {
  request: function(elem){
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  },
  exit: function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

var changeLockOrientation = function() {
  console.log('changing')
  if(this.value !== 'unlocked') {
    window.screen.orientation.lock(this.value);
  } else {
    window.screen.orientation.unlock();
  }
};

$('.lock').on('click', function() {
  fullscreen.request(this.parentNode);
  changeLockOrientation.call($('select')[0]);
});
$('.unlock').on('click', function() {
   fullscreen.exit();
});

$('select').on('change', changeLockOrientation);