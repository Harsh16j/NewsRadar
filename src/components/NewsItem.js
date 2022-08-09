import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <Card>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left: "90%" }}>
            {source}
          </span>
          <Card.Img
            variant="top"
            src={
              imageURL
                ? imageURL
                : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            }
            style={{ width: "100%", height: "200px" }}
          />
          {/* To fix the size of the image w.r.t. the cards */}
          <Card.Body>
            <Card.Title>{title.slice(0, 45)}</Card.Title>
            <Card.Text>
              {description == null ? "---" : description.slice(0, 88)}
            </Card.Text>
            <p className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </p>
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
