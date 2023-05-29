Meditation Website 

This is a React-based website that provides a meditation experience for users. It features a timer with a progress circle that counts down for 10 minutes, similar to the concept of the Pomodoro technique. The progress circle changes its color as the time progresses. The website also includes sections with informative texts about meditations and their benefits.

App is running on the http://localhost:3000 


To enable music playback using the Spotify API, you need to provide your client credentials in the spotify.env file. Follow these steps to configure the credentials:

Create a Spotify developer account and set up a new application.
Obtain the Client ID and Client Secret for your application.
Create a new file named .env in the root directory of the project.
Add the following lines to the .env file:
REACT_APP_SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID
REACT_APP_SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET


The following dependencies are used in this project:

React: JavaScript library for building user interfaces.
HTML: Markup language for structuring the website.
CSS: Styling language for customizing the website's appearance.
Spotify API: Allows integration with Spotify to play background music.