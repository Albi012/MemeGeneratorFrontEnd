import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TextModel from "../models/TextModel";
import TextCard from "../components/TextCard";
import TemplateModel from "../models/TemplateModel";
import axios from "axios";
import Card from "react-bootstrap/Card";

interface State {
  template: TemplateModel;
  texts: TextModel[];
  selectedText: TextModel;
  refetchTemplate: () => void;
  refetchTexts: () => void;
  setSelectedText: (text: TextModel) => void;
  sendMemeGenerator: () => void;
}

class CreateNewMeme extends Component<State> {
  state: State = {
    template: {
      template_id: 0,
      url:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
    },
    texts: [],
    selectedText: { text0: "", text1: "", id: 0 },
    refetchTemplate: () => {
      axios.get("http://localhost:8762/image-generator").then(resp => {
        this.setState({ template: resp.data });
        console.log(resp);
      });
    },

    setSelectedText: (text: TextModel) => {
      this.setState({
        selectedText: text
      });
    },

    sendMemeGenerator: () => {
      axios({
        method: "post",
        url: "http://localhost:8762/image-flip",
        data: {
          templateId: this.state.template.template_id,
          text0: this.state.selectedText.text0,
          text1: this.state.selectedText.text1
        }
      });
    },

    refetchTexts: () => {
      axios
        .get("http://localhost:8762/text-generator/random-text")
        .then(response => {
          this.setState({ texts: response.data });
        })
        .catch(e => console.log(e));
    }
  };

  componentDidMount() {
    this.state.refetchTemplate();
    this.state.refetchTexts();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card>
              <Card.Img src={this.state.template.url} />
            </Card>
          </Col>
        </Row>
        <Row>
          {this.state.texts.map((text: TextModel) => (
            <Col>
              <TextCard
                activeId={this.state.selectedText.id}
                text={text}
                selector={this.state.setSelectedText}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-md-center">
          <Col md={1}>
            <Button onClick={() => this.state.sendMemeGenerator()}>Send</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateNewMeme;
