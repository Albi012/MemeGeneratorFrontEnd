import React from "react";
import MemeModel from "../models/MemeModel";
import Card from "react-bootstrap/Card";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";

interface Props {
  meme: MemeModel;
}

const MemeCard: React.FC<Props> = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.meme.url} />
      <Card.Body>
        <Button variant="success">
          <FaArrowUp />
          ({props.meme.upVote})
        </Button>
        <Button variant="danger">
          <FaArrowDown />
          ({props.meme.downVote})
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
