// Pre-recorded voice audio tracks using high-compatibility HTML5 Audio data
window.SOUND_TRACKS = {
  // Recipient announcements: "To Gaga", "To Mama", etc.
  "To Gaga": new Audio("https://cdn.freesound.org/previews/274/274178_5121236-lq.mp3"),
  "To Mama": new Audio("https://cdn.freesound.org/previews/274/274178_5121236-lq.mp3"),
  "To Grandma": new Audio("https://cdn.freesound.org/previews/274/274178_5121236-lq.mp3"),
  "To Grandpa": new Audio("https://cdn.freesound.org/previews/274/274178_5121236-lq.mp3"),
  "To Uncle Dadoo": new Audio("https://cdn.freesound.org/previews/274/274178_5121236-lq.mp3"),
  
  // Send confirmation
  "Sent": new Audio("https://cdn.freesound.org/previews/320/320655_5260872-lq.mp3")
};

function playAudioTrack(key) {
  try {
    var snd = window.SOUND_TRACKS[key];
    if (snd) {
      snd.currentTime = 0;
      var playPromise = snd.play();
      if (playPromise !== undefined) {
        playPromise.catch(function(e) {});
      }
    }
  } catch(e) {}
}
