function play(selectedClip) {
  // for (i = 0; i < clips.length; i++) {
  //   if (clips[i].sampleUrl === selectedClip.sampleUrl) {
  //     clips[i].isLooping = true;
  //     loop(clip);
  //   } else {
  //     clips[i].isLooping = false;
  //   };
  // }
  clips.forEach(function(clip) {
    if (clip.sampleUrl === selectedClip.sampleUrl) {
      clip.isLooping = true;
      loop(clip);
    } else {
      clip.isLooping = false;
    };
  });
}

function loop(clip) {
  clip.sound.play({
    onfinish: function() {
      if (clip.isLooping) {
        loop(clip);
      }
    }
  });
}

var clips = [];

var Clip = function(sampleUrl) {
  this.sampleUrl = sampleUrl,
  this.isLooping = false
};

Clip.prototype.makeSound = function() {
  var sampleUrl = this.sampleUrl;
  this.sound = soundManager.createSound({
    url: sampleUrl
  });
};

$(function(){
  soundManager.setup({
    url: 'audio',
    onready: function() {
      var uuhh = new Clip('audio/uuhh_sample.mp3');
      clips.push(uuhh);
      uuhh.makeSound();
      $("#uuhh").on("click", function() {
        play(uuhh);
      });
      var over = new Clip('audio/over_sample.mp3');
      clips.push(over);
      over.makeSound();
      $("#over").on("click", function() {
        play(over);
      });
      var piano = new Clip('audio/piano_chord.mp3');
      clips.push(piano);
      piano.makeSound();
      $("#piano").on("click", function() {
        play(piano);
      });
      var chillBeat = new Clip('audio/chill_beat_sample.mp3');
      clips.push(chillBeat);
      chillBeat.makeSound();
      $("#chillBeat").on("click", function() {
        play(chillBeat);
      });
      var loveYou = new Clip('audio/still_love_you.mp3');
      clips.push(loveYou);
      loveYou.makeSound();
      $("#loveYou").on("click", function() {
        play(loveYou);
      });
      var whatFor = new Clip('audio/what_for_idk.mp3');
      clips.push(whatFor);
      whatFor.makeSound();
      $("#whatFor").on("click", function() {
        play(whatFor);
      });
      var oohh = new Clip('audio/oohh_sample.mp3');
      clips.push(oohh);
      oohh.makeSound();
      $("#oohh").on("click", function() {
        play(oohh);
      });
      var funky = new Clip('audio/funky_sample.mp3');
      clips.push(funky);
      funky.makeSound();
      $("#funky").on("click", function() {
        play(funky);
      });
      var chordBeat = new Clip('audio/chord_beat.mp3');
      clips.push(chordBeat);
      chordBeat.makeSound();
      $("#chordBeat").on("click", function() {
        play(chordBeat);
      });
  }
})
})