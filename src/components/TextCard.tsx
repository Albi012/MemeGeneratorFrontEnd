import React from "react";
import TextModel from "../models/TextModel";
import Card from "react-bootstrap/Card";

interface Props {
  text: TextModel;
  activeId: number;
}

const TextCard: React.FC<Props> = props => {
  const activeStyle = {};
  const passiveStyle = {};

  return (
    <Card style={props.activeId != props.text.id ? activeStyle : passiveStyle}>
      <Card.Body>
        <Card.Text>{props.text.text0}</Card.Text>
        <Card.Text>{props.text.text1}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TextCard;
