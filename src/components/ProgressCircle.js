import React, { useState, useEffect, useCallback } from "react";
import { ImPlay3, ImPause2 } from "react-icons/im";
import ".//ProgressCircle.css";


const ProgressCircle = () => {
  const [time, setTime] = useState(10 * 60); // time in seconds
  const [offset, setOffset] = useState(1381.6); // value of stroke-dashoffset
  const [isPlaying, setIsPlaying] = useState(false); // variable to track if it's playing or not
  const [accessToken, setAccessToken] = useState(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audio, setAudio] = useState(null);
  const playIcon = isPlaying ? <ImPause2 /> : <ImPlay3 />;

  async function getAccessToken() {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    console.log('process.env', process.env);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    };
  
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  async function getTrack(access_token) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    };
  
    try {
      const response = await fetch('https://api.spotify.com/v1/tracks/1fm7ZEMN73ygxuZIj0HR3x?si=6653bad3bd67469f', requestOptions);
      const data = await response.json();
      return data.preview_url;
    } catch (error) {
      console.log('Error:', error);
    }
  }


  const calculateOffset = useCallback((currentTime) => {
    const totalLength = 1381.6; // length of circle in px
    const oneSecondLength = totalLength / (10 * 60); // length of one second in px
    return totalLength - oneSecondLength * (10 * 60 - currentTime); // calculate current offset value
  }, []);


  const handleClick = () => {
    setIsPlaying(!isPlaying);
  
    if (audio) {
      setIsPlayingMusic(!isPlayingMusic);
    } else {
      getTrack(accessToken).then(url => {
        const newAudio = new Audio(url);
        const onEnded = () => setIsPlayingMusic(false); // Define the event handler function
        newAudio.addEventListener('ended', onEnded);
        setAudio(newAudio);
        setIsPlayingMusic(true);
  
        return () => {
          newAudio.removeEventListener('ended', onEnded); // Remove the event listener when component unmounts
        };
      });
    }
  };

  function handleAudioPlayback(audio, isPlayingMusic) {
    if (audio) {
      if (isPlayingMusic) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
  
  const startTimer = useCallback(() => {
    let intervalId = null;
    if (isPlaying && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsPlaying(false);
    }
    return intervalId;
  }, [isPlaying, time]);

  function updateOffset(isPlaying, setOffset, calculateOffset, currentTime) {
    if (isPlaying) {
      setOffset(calculateOffset(currentTime));
    }
  }
  
  const updateOffsetWhenNotPlaying = useCallback(() => {
    if (!isPlaying) {
      setOffset(calculateOffset(time));
    }
  }, [isPlaying, time, calculateOffset]);

  
  useEffect(() => {
    handleAudioPlayback(audio, isPlayingMusic);

    const intervalId = startTimer();

    updateOffset(isPlaying, setOffset, calculateOffset, time);

    updateOffsetWhenNotPlaying();

    getAccessToken().then(token => setAccessToken(token));

    return () => {
      clearInterval(intervalId);
    };
  }, [audio, isPlayingMusic, isPlaying, time, setOffset, calculateOffset, updateOffsetWhenNotPlaying, startTimer]);


  return (
    <div className="player-container">
        <h1 className="header">Welcome to our Meditation Website</h1>
        <div className="play-icon" onClick={handleClick}>
          {accessToken && playIcon}
        </div>
        
      <div className="circle">
        <svg height="500" width="500" viewBox="0 0 500 500">
          <circle className="track-outline" r="220" cx="250" cy="250" stroke="#B727C2" strokeWidth="20" fillOpacity="0" transform="rotate(-90)"></circle>
          <circle className="moving-outline" r="220" cx="250" cy="250" stroke="#ED32FA" strokeWidth="20" fillOpacity="0"
            style={{ strokeDasharray: "1381.6", strokeDashoffset: `${offset}px`, transition: "stroke-dashoffset 1s linear", transform: "rotate(-90deg)"}}></circle>
        </svg>
      </div>

      <h3 id="timer">{Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}</h3>
      <p className="ProgressCircleText">Discover the benefits of meditation and learn various practices to help you live a more peaceful life.</p> 

    </div>
  );
};

export default ProgressCircle;