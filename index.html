    // --- 1. Global Persistence & Audio State ---
    window.activeUtterances = [];
    var isVoiceReady = false;
    var keepAliveTimer = null;

    function ensureAudio() {
      try {
        var AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass && !audioCtx) {
          audioCtx = new AudioClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
      } catch (e) {}
    }

    // --- 2. Keep-Alive Heartbeat (Prevents iPadOS Audio Sleep) ---
    function startVoiceKeepAlive() {
      if (keepAliveTimer) clearInterval(keepAliveTimer);
      keepAliveTimer = setInterval(function() {
        if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 10000);
    }

    // --- 3. Reliable Speak Function ---
    function speakText(phrase) {
      if (!('speechSynthesis' in window)) return;

      try {
        ensureAudio();

        // If the engine paused itself, wake it up
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        var utter = new SpeechSynthesisUtterance(phrase);
        utter.rate = 0.90;
        utter.pitch = 1.20;
        utter.lang = 'en-US';

        // Pin to global array to prevent WebKit garbage collection
        window.activeUtterances.push(utter);

        utter.onend = function() {
          var index = window.activeUtterances.indexOf(utter);
          if (index > -1) window.activeUtterances.splice(index, 1);
        };

        utter.onerror = function() {
          var index = window.activeUtterances.indexOf(utter);
          if (index > -1) window.activeUtterances.splice(index, 1);
        };

        window.speechSynthesis.speak(utter);
      } catch (err) {}
    }

    // --- 4. Activator Button Handler ---
    bindAction(voiceUnlockBtn, function() {
      ensureAudio();
      isVoiceReady = true;
      startVoiceKeepAlive();

      // Clear any stalled speech and speak
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      speakText("Voice is ready!");
      voiceUnlockArea.style.display = 'none';
    });
