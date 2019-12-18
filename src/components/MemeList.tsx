import React from "react";
import MemeModel from "../models/MemeModel";
import MemeCard from "./MemeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  memes: MemeModel[];
}

const MemeList: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {props.memes.map((meme: MemeModel) => (
        <Row className="justify-content-md-center">
          <Col md={6}>
            <MemeCard meme={meme} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default MemeList;
