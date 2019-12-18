import React from "react";
import MemeModel from "../models/MemeModel";
import Card from "react-bootstrap/Card";

interface Props {
  meme: MemeModel;
}

const MemeCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <Card.Body>{props.meme.url}</Card.Body>
    </Card>
  );
};

export default MemeCard;
