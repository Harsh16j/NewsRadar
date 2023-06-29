import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NewsItem(props) {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
        <div className="my-3">
            <Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                    }}
                >
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
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
                    <Card.Title>{title ? title : " "}</Card.Title>
                    <Card.Text>
                        {description == null
                            ? "---"
                            : description.slice(0, 100) +
                              (description.length > 100 ? "..." : "")}
                    </Card.Text>
                    <p className="text-muted">
                        By {author ? author : "Unknown"} on{" "}
                        {new Date(date).toGMTString()}
                    </p>
                    <Button
                        variant="primary"
                        size="sm"
                        href={newsURL}
                        target="_blank"
                    >
                        Read more
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageURL, newsURL, author, date, source } =
//       this.props;
//     return (
//       <div className="my-3">
//         <Card>
//           <div style={{display: 'flex',
//     justifyContent: 'flex-end',
//     position: 'absolute',
//     right: "0"}}>
//           <span className="badge rounded-pill bg-danger">
//             {source}
//           </span>
//           </div>
//           <Card.Img
//             variant="top"
//             src={
//               imageURL
//                 ? imageURL
//                 : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
//             }
//             style={{ width: "100%", height: "200px" }}
//           />
//           {/* To fix the size of the image w.r.t. the cards */}
//           <Card.Body>
//             <Card.Title>{title?title.slice(0, 45):" "}</Card.Title>
//             <Card.Text>
//               {description == null ? "---" : description.slice(0, 88)}
//             </Card.Text>
//             <p className="text-muted">
//               By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
//             </p>
//             <Button variant="primary" size="sm" href={newsURL} target="_blank">
//               Read more
//             </Button>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }
// }

// export default NewsItem;
