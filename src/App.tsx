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
  orderMemes: () => void;
  memes: MemeModel[];
  orderedMemes: MemeModel[];
}

class App extends Component<Props, State> {
  state: State = {
    refetchMemes: () => {
      axios
        .get("http://localhost:8762/meme-storage/leader-board")
        .then(response => {
          this.setState({ memes: response.data });
          this.state.orderMemes();
        })
        .catch(e => console.log(e));
    },
    orderMemes: () => {
      let orderedMemes: MemeModel[] = [...this.state.memes];
      orderedMemes.sort((a, b) => b.upVote - a.upVote);
      this.setState({ orderedMemes: orderedMemes });
    },
    memes: [],
    orderedMemes: []
  };

  componentDidMount() {
    this.state.refetchMemes();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            component={() => <MemeList memes={this.state.memes}  refetchMemes={this.state.refetchMemes}/>}
          />
          <Route
            path="/leaderboard"
            component={() => <Leaderboard memes={this.state.orderedMemes} refetchMemes={this.state.refetchMemes}/>}
          />
          <Route
            path="/create"
            component={() => (
              <CreateNewMeme refetch={this.state.refetchMemes} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
