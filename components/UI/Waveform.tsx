import React, { Component, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = () => {
  useEffect(() => {
    const track = document.querySelector("#track");

    var waveform = WaveSurfer.create({
      barWidth: 4,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 320,
      progressColor: "#FFC061",
      responsive: true,
      waveColor: "#00000010",
      cursorColor: "transparent",
    });

    waveform.load(track);

    return () => waveform.destroy();
  }, []);

  const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

  return (
    <div className="h-full w-[42rem] overflow-hidden">
      {/* <PlayButton>
          Play
        </PlayButton> */}
      <div className="h-full w-full py-4">
        <div className="h-full overflow-hidden">
          <div id="waveform" className="w-full -translate-y-12" />
        </div>
      </div>
      <audio id="track" src={url} />
    </div>
  );
};

export default Waveform;
