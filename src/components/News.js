import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dc4f86ebe3ef4491ab0610eac28369a6";
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);

    this.setState({ articles: parsedData.articles });
  }
  render() {
    let span = 4;
    let offset = 0; //offset not needed
    return (
      <div className="container">
        <h2 className="my-3">News Monkey - Top Headlines</h2>

        <Container>
          <Row className="my-3">
            {this.state.articles.map((element) => {
              return (
                <Col key={element.url} md={{ span: span, offset: offset }}>
                  {/* // url will be unique and can be used as a key */}
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default News;
