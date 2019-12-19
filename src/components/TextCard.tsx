import React from "react";
import TextModel from "../models/TextModel";
import Card from "react-bootstrap/Card";

interface Props {
  text: TextModel;
  activeId: number;
  selector: (text: TextModel) => void;
}

const TextCard: React.FC<Props> = props => {
  const activeStyle = { border: "solid 2px green" };
  const passiveStyle = { border: "solid 1px black" };

  return (
    <Card
      onClick={() => props.selector(props.text)}
      style={props.activeId !== props.text.id ? passiveStyle : activeStyle}
    >
      <Card.Body>
        <Card.Text>{props.text.text0}</Card.Text>
        <Card.Text>{props.text.text1}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TextCard;
