import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import TextModel from "../models/TextModel";
import TextCard from "../components/TextCard";
import TemplateModel from "../models/TemplateModel";
import axios from "axios";

interface State {
  template: TemplateModel;
  texts: TextModel[];
  selectedText: TextModel;
  refetchTemplate: () => void;
  refetchTexts: () => void;
}

class CreateNewMeme extends Component<State> {
  state: State = {
    template: { templateId: 0, templateUrl: "" },
    texts: [],
    selectedText: { text0: "", text1: "", id: 0 },
    refetchTemplate: () => {
      this.setState({
        templateUrl:
          "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
      });
    },
    refetchTexts: () => {
      axios
        .get("http://10.44.5.191:8762/text-generator/random-text")
        .then(response => {
          this.setState({ texts: response.data });
        })
        .catch(e => console.log(e));
    }
  };

  componentDidMount() {
    this.state.refetchTemplate();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Image src={this.state.template.templateUrl} rounded />
          </Col>
        </Row>
        <Row>
          {this.state.texts.map((text: TextModel) => (
            <Col>
              <TextCard activeId={this.state.selectedText.id} text={text} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CreateNewMeme;
