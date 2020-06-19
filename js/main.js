(() => {
  console.log('fired')

  let audioControls = document.querySelectorAll(".controls"),
      audio = document.querySelector('audio');

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


  audioControls[0].addEventListener("click", playAudio);
  audioControls[1].addEventListener("click", pauseAudio);
  audioControls[2].addEventListener("click", rewindAudio);
}) ();
