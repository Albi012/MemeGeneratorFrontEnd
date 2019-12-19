import React from "react";
import MemeModel from "../models/MemeModel";
import Card from "react-bootstrap/Card";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VoteButton from "./VoteButton";

interface Props {
  refetchMemes: () => void;
  meme: MemeModel;
  index: number;
}

const LeaderboardElement: React.FC<Props> = props => {
  return (
    <Card>
      <Card.Body>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Card.Title>{props.index + 1}.</Card.Title>
            </Col>
            <Col xs={6} md={4}>
              <Image src={props.meme.url} thumbnail />
            </Col>
            <Col className="align-center ">
              <VoteButton refetchMemes={props.refetchMemes} meme={props.meme} voteType={"up-vote"}/>
              <hr />
              <VoteButton refetchMemes={props.refetchMemes} meme={props.meme} voteType={"down-vote"}/>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default LeaderboardElement;
