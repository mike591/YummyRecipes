import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const API_KEY = "AIzaSyDipWSuBY5-BIMIcRsGVnbQ176Gv-2S6nI";
const CLIENT_ID = "1068354047993-srsg6sa1srkam156q3897v9545r95f77.apps.googleusercontent.com";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.initClient = this.initClient.bind(this);
    this.handleAuthClick = this.handleAuthClick.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  componentWillMount() {
    gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
        clientId: CLIENT_ID,
        scope: 'profile'
    }).then(() => {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(()=> {
            console.log("google auth works");
          });

        });
  }

  handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  render() {
    return(
      <div className="home-page">
        <button onClick={this.handleAuthClick}>Sign In</button>
        <button onClick={this.handleSignoutClick}>Sign Out</button>
      </div>
    )
  }
}

export default Home;
