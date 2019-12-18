import React, { Component } from "react";
import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import CreateNewMeme from "./components/CreateNewMeme";
import MemeList from "./components/MemeList";
import axios from "axios";
import MemeModel from "./models/MemeModel";

interface Props {}

interface State {
  refetchMemes: () => void;
  memes: MemeModel[];
}

class App extends Component<Props, State> {
  state: State = {
    refetchMemes: () => {
      axios
        .get(`http://localhost:8762/meme-storage/leader-board`)
        .then(response => {
          this.setState({ memes: response.data });
        });
    },
    memes: []
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={MemeList} memes={this.state.memes} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/create" component={CreateNewMeme} />
        </div>
      </Router>
    );
  }
}

export default App;
