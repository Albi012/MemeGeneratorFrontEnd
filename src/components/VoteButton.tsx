import React, {Component} from "react";
import MemeModel from "../models/MemeModel";
import {FaArrowUp} from "react-icons/all";
import Button from "react-bootstrap/Button";
import axios from "axios";

interface Props {
    meme: MemeModel;
    voteType: string;
}

interface State {
    vote: (memeId: number, voteType: string) => void;
}

class VoteButton extends Component<Props, State> {

    state: State = {
        vote: (memeId, voteType) => {
            axios
                .get(`http://10.44.13.27:8762/meme-storage/${voteType}/${memeId}`)
                .then(() => {
                    (voteType === "up-vote") ? this.props.meme.upVote +=1 : this.props.meme.downVote +=1;
                })
                .catch(e => console.log(e));
        }
    };

    render() {
        return (
            <Button onClick={() => {
                this.state.vote(this.props.meme.id, this.props.voteType)
            }} variant={(this.props.voteType === "up-vote") ? "success" : "danger"}>
                <FaArrowUp/>
                ({(this.props.voteType === "up-vote") ? this.props.meme.upVote: this.props.meme.downVote})
            </Button>
        )
    }
}

export default VoteButton