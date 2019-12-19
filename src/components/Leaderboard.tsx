import React from "react";
import MemeModel from "../models/MemeModel";
import LeaderboardElement from "../components/LeaderboardElement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
    refetchMemes: () => void;
    memes: MemeModel[];
}

const Leaderboard: React.FC<Props> = (props: Props) => {
    return (
        <Container>
            {props.memes.map((meme: MemeModel, index: number) => (
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <LeaderboardElement meme={meme} index={index} refetchMemes={props.refetchMemes}/>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Leaderboard;
