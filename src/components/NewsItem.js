import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export default function NewsItem(props) {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    const [focus, setFocus] = useState(false);
    return (
        <Card
            className="h-100"
            style={{
                cursor: "pointer",
                backgroundColor: "#EDEDED",
                borderStyle: "solid",
                borderColor: `${focus ? "inherit" : "white"}`,
                borderWidth: "2px",
                borderRadius: "10px",
            }}
            onClick={() => {
                window.open(newsURL, "_blank");
            }}
            onMouseEnter={() => {
                setFocus(true);
            }}
            onMouseLeave={() => {
                setFocus(false);
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0",
                }}
            >
                <span className="badge rounded-pill bg-danger">{source}</span>
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
            </Card.Body>
            <div
                style={{
                    padding: "16px",
                }}
            >
                <p className="text-muted">
                    By {author ? author : "Unknown"} on{" "}
                    {new Date(date).toGMTString()}
                </p>

                {/* <a
                    // variant="outline-primary"
                    size="sm"
                    href={newsURL}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                        border: "0",
                        width: "200px",
                        backgroundColor: "inherit",
                        color: "blue",
                        fontSize: "18px",
                        textDecoration: "none",
                    }}
                >
                    Read more
                </a> */}
            </div>
        </Card>
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
