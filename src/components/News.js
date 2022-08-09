import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  static defaulProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  async updateNews(page_change) {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=dc4f86ebe3ef4491ab0610eac28369a6&page=${
      this.state.page + page_change
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + page_change,
    });
  }
  async componentDidMount() {
    this.updateNews(0);
  }
  handleNextClick = async () => {
    this.updateNews(1);
  };
  handlePrevClick = async () => {
    this.updateNews(-1);
  };

  render() {
    let span = 4;
    let offset = 0; //offset not needed

    return (
      <div className="container">
        <h2 className="text-center my-3">News Monkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <Container>
          <Row className="my-3">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <Col key={element.url} md={{ span: span, offset: offset }}>
                    {/* // url will be unique and can be used as a key */}
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageURL={element.urlToImage}
                      newsURL={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
        <div className="d-flex justify-content-between my-3">
          <Button
            variant="primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>
          <Button
            variant="primary"
            disabled={
              this.state.page * this.props.pageSize >= this.state.totalResults
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}

export default News;
