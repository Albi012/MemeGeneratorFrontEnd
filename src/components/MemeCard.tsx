import React from "react";
import MemeModel from "../models/MemeModel";
import Card from "react-bootstrap/Card";
import VoteButton from "./VoteButton";

interface Props {
  meme: MemeModel;
}

const MemeCard: React.FC<Props> = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.meme.url} />
      <Card.Body>
        <VoteButton meme={props.meme} voteType={"up-vote"}/>
        <VoteButton meme={props.meme} voteType={"down-vote"}/>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
