// --- Temporary Debug Logic ---
    var debugBtn = document.getElementById('debugBtn');
    var debugText = document.getElementById('debugText');

    debugBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 1. Force the audio context to wake up
      primeAudioAndSpeech(); 
      
      // 2. Ask the browser for the list of voices
      var voices = window.speechSynthesis.getVoices();
      
      // 3. Print the results to the screen
      if (voices.length === 0) {
        debugText.textContent = "Error: 0 voices found. iPadOS Safari is blocking the speech engine.";
      } else {
        var englishVoices = voices.filter(function(v) { return v.lang.indexOf('en') === 0; });
        debugText.textContent = "Success! Found " + voices.length + " total voices, and " + englishVoices.length + " English voices. First English voice: " + (englishVoices.length > 0 ? englishVoices[0].name : "None");
        
        // Try to speak a test phrase immediately
        var testUtterance = new SpeechSynthesisUtterance("Testing voice connection");
        if (englishVoices.length > 0) testUtterance.voice = englishVoices[0];
        window.speechSynthesis.speak(testUtterance);
      }
    });