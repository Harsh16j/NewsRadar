import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class News extends Component {
  render() {
    let span = 4;
    let offset = 0;   //offset not needed
    return (
      <div className="container">
        <h2 className="my-3">News Monkey - Top Headlines</h2>
        <Container>
          <Row className="my-3">
            <Col md={{ span: span, offset: offset }}>
              <NewsItem title="News Title" description="News Description"/>
            </Col>
            <Col md={{ span: span, offset: offset }}>
              <NewsItem />
            </Col>
            <Col md={{ span: span, offset: offset }}>
              <NewsItem />
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={{ span: span, offset: offset }}>
              <NewsItem />
            </Col>
            <Col md={{ span: span, offset: offset }}>
              <NewsItem />
            </Col>
            <Col md={{ span: span, offset: offset }}>
              <NewsItem />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default News;
