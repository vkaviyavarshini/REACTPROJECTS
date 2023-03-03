import React, { useState } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';

const DrumMachine = () => {
  const [sounds] = useState([
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    }
  ]);

  const playSound = (sound) => {
    const audio = new Audio(sound.url);
    audio.play();
  };

  const handleKeyPress = (event) => {
    const sound = sounds.find(
      (sound) => sound.keyCode === event.keyCode
    );
    if (sound) {
      playSound(sound);
    }
  };

  return (
    <div className="drum-machine" onKeyDown={handleKeyPress} tabIndex="0">
      <h1 style={{textAlign: "center",
          fontSize:"40px",
          margin: "0 auto",
          marginTop: "50px"}}>DRUM MACHINE</h1>
      <div className="drum-buttons"style={{textAlign: "center",
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems: 'center'}}>
        {sounds.map((sound) => {
          return (
            <button variant="primary"
              key={sound.id}
              className="drum-pad"
              onClick={() => playSound(sound)}
            >
              {sound.keyTrigger}
              <audio src={sound.url} id={sound.keyTrigger} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DrumMachine;