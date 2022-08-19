(function(window) {
  
  var byeSpeaker = {}
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  var speakWord = "GoodBye ";
  window.byeSpeaker = byeSpeaker;

})(window);