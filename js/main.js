(() => {
  console.log('fired')

  let audioControls = document.querySelectorAll('.controls'),
      audio = document.querySelector('audio');
      audioThumbs = document.querySelectorAll('.trackRef');

  function loadAndPlay() {

    audio.src = `audio/${this.dataset.trackref}`;

    audio.load();
    playAudio();
  }

  function playAudio() {

    audio.play();
  }

  function pauseAudio() {

    audio.pause();
  }

  function rewindAudio() {

    audio.currentTime = 0;
    //debugger;
  }


  audioControls[0].addEventListener('click', playAudio);
  audioControls[1].addEventListener('click', pauseAudio);
  audioControls[2].addEventListener('click', rewindAudio);

  // process image tags and make them load the right audio tracks
  for (thumb of audioThumbs) {
    thumb.addEventListener('click', loadAndPlay);
  }

  audio.addEventListener('ended', () => console.log('track ended'));
}) ();
