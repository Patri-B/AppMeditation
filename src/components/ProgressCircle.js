import React, { useState, useEffect } from "react";
import { ImPlay3, ImPause2 } from "react-icons/im";

import ".//ProgressCircle.css";

function getAccessToken() {
  const clientId = '46dc9d25447b414297e8df42f5a82822';
  const clientSecret = '8ca23b4bf8194968ba1bff306ed800f0';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  };

  return fetch('https://accounts.spotify.com/api/token', requestOptions)
    .then(response => response.json())
    .then(data => data.access_token)
    .catch(error => console.log('Error:', error));
}

function getTrack(access_token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  };

  return fetch('https://api.spotify.com/v1/tracks/1fm7ZEMN73ygxuZIj0HR3x?si=6653bad3bd67469f', requestOptions)
    .then(response => response.json())
    .then(data => data.preview_url)
    .catch(error => console.log('Error:', error));
}


const ProgressCircle = () => {
  const [time, setTime] = useState(10 * 60); // time in seconds
  const [offset, setOffset] = useState(1193); // value of stroke-dashoffset
  const [isPlaying, setIsPlaying] = useState(false); // variable to track if it's playing or not
  const [previousTime, setPreviousTime] = useState(10 * 60); // previous time
  const [accessToken, setAccessToken] = useState(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    getAccessToken().then(token => setAccessToken(token));
  }, []);

  useEffect(() => {
    if (audio) {
      if (isPlayingMusic) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlayingMusic, audio]);

  // function to be triggered when play button is clicked
 
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    if (audio) {
      setIsPlayingMusic(!isPlayingMusic);
    } else {
      getTrack(accessToken).then(url => {
        const newAudio = new Audio(url);
        newAudio.addEventListener('ended', () => setIsPlayingMusic(false));
        setAudio(newAudio);
        setIsPlayingMusic(true);
       
      });
    }
  }
  const handleMultipleClicks = () =>{
    handlePlayClick();
    handlePlay();

  }

  const playIcon = isPlaying ? <ImPause2 /> : <ImPlay3 />;

  useEffect(() => {
    let intervalId = null;

    // if playing, start timer
    if (isPlaying && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // if time is up, stop playing
      setIsPlaying(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, time]);

  // function to calculate stroke-dashoffset value based on time
  const calculateOffset = (time) => {
    const totalLength = 1193; // length of circle in px
    const oneSecondLength = totalLength / (10 * 60); // length of one second in px
    return totalLength - oneSecondLength * (10 * 60 - time); // calculate current offset value
  };

  useEffect(() => {
    // if playing, update the value of stroke-dashoffset after each second
    if (isPlaying) {
      setOffset(calculateOffset(time));
    } else {
      setPreviousTime(time);
    }
  }, [isPlaying, time]);

  useEffect(() => {
    // if not playing, update the value of stroke-dashoffset after each second
    if (!isPlaying) {
      setOffset(calculateOffset(previousTime));
    }
  }, [isPlaying, previousTime]);

  return (
    <div className="player-container">
        <h1 className="header">Welcome to our Meditation Website</h1>
        <div className="play-icon" onClick={handleMultipleClicks}>
        {accessToken && playIcon}
          </ div>


      <svg className="circle-graphics" height="80%" width="80%" viewBox="0 0 400 400">
        <circle className="track-outline" r="190" cx="200" cy="200" stroke="#B727C2" strokeWidth="15" fillOpacity="0" transform="rotate(-90)"></circle>
        <circle className="moving-outline" r="190" cx="200" cy="200" stroke="#ED32FA" strokeWidth="15" fillOpacity="0"
          style={{ strokeDasharray: "1193", strokeDashoffset: `${offset}px`, transition: "stroke-dashoffset 1s linear", transform: "rotate(-90deg)"}}></circle>
      </svg>

      <h3 id="timer">{Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}</h3>
      <p className="ProgressCircleText">Discover the benefits of meditation and learn various practices to help you live a more peaceful life.</p> 
 
     
    </div>
  );
};

export default ProgressCircle;