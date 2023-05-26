import React, { useEffect, useState } from 'react';

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

  return fetch('https://api.spotify.com/v1/tracks/4vFvs3PSPKhcUh8iusCYTc?si=aea7a1bb11c645a8', requestOptions)
    .then(response => response.json())
    .then(data => data.preview_url)
    .catch(error => console.log('Error:', error));
}

function AppTrack() {
  const [accessToken, setAccessToken] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    getAccessToken().then(token => setAccessToken(token));
  }, []);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  const handlePlay = () => {
    if (audio) {
      setIsPlaying(!isPlaying);
    } else {
      getTrack(accessToken).then(url => {
        const newAudio = new Audio(url);
        newAudio.addEventListener('ended', () => setIsPlaying(false));
        setAudio(newAudio);
        setIsPlaying(true);
       
      });
    }
  }

  return (
    <div>
      {accessToken && <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'} Track</button>}
    </div>
  );
}

export default AppTrack;
