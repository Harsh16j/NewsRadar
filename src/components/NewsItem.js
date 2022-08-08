import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL } = this.props;
    return (
      <div className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src={imageURL?imageURL:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"}
            style={{ width: "100%", height: "200px" }}
          />
          {/* To fix the size of the image w.r.t. the cards */}
          <Card.Body>
            <Card.Title>{title.slice(0, 45)}</Card.Title>
            <Card.Text>
              {description == null ? "---" : description.slice(0, 88)}
            </Card.Text>
            <Button variant="primary" size="sm" href={newsURL} target="_blank">
              Read more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
