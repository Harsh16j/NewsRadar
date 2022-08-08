import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export class News extends Component {
  constructor() {
    super();
    this.no_of_results_per_page=12;   // Number of results per page set to 12
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dc4f86ebe3ef4491ab0610eac28369a6&page=${
      this.state.page + 1
    }&pageSize=${this.no_of_results_per_page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1,totalResults:parsedData.totalResults });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dc4f86ebe3ef4491ab0610eac28369a6&page=${
      this.state.page - 1
    }&pageSize=${this.no_of_results_per_page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 ,totalResults:parsedData.totalResults});
  };
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=dc4f86ebe3ef4491ab0610eac28369a6&pageSize=${this.no_of_results_per_page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);

    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults });
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
        <div className="d-flex justify-content-between">
          <Button
            variant="primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>
          <Button variant="primary" disabled={this.state.page*this.no_of_results_per_page>=this.state.totalResults} onClick={this.handleNextClick}>
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}

export default News;
