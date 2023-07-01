import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import noResultsImage from "../images/no results image.jpg";

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [newPageLength, setNewPageLength] = useState(1);
    const [isFetching, setIsFetching] = useState(true);
    const { debouncedSearchQuery } = props;
    const [firstRun, setFirstRun] = useState(true);
    // let span = 4;
    // let offset = 0; //offset not needed

    const capitalizedCategory =
        props.category === "general"
            ? ""
            : props.category.charAt(0).toUpperCase() +
              props.category.slice(1) +
              "-";

    const updateNews = async (page_change) => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${props.category}&apiKey=${props.APIKey}&page=${
            page + page_change
        }&pageSize=${props.pageSize}`;
        url =
            debouncedSearchQuery === ""
                ? url
                : `${url}&q=${debouncedSearchQuery}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + page_change);
        props.setProgress(100);

        setIsFetching(false);
    };
    useEffect(() => {
        console.log("reloaded");
        /* eslint-disable */
        document.title = `${capitalizedCategory}NewsRadar`;

        return () => {
            if (props.query.length !== 0) {
                props.setQuery("");
                console.log("leaving");
            }
        };
    }, []);
    useEffect(() => {
        if (!(firstRun && debouncedSearchQuery.length !== 0)) {
            console.log("debounced:", debouncedSearchQuery);
            updateNews(0);
        }
        setFirstRun(false);
        console.log("debounced:", debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${props.category}&apiKey=${props.APIKey}&page=${
            page + 1
        }&pageSize=${props.pageSize}`;
        url =
            debouncedSearchQuery === ""
                ? url
                : `${url}&q=${debouncedSearchQuery}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + 1);
        setNewPageLength(parsedData.articles.length);
    };
    return (
        <>
            {!isFetching && articles.length === 0 ? (
                <>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            marginTop: "100px",
                        }}
                    >
                        <div>
                            <div>
                                <img
                                    src={noResultsImage}
                                    height={250}
                                    width={500}
                                />
                            </div>

                            <div
                                className="sorryNoResults"
                                style={{
                                    textAlign: "center",
                                    fontSize: "20px",
                                    marginTop: "15px",
                                }}
                            >
                                Sorry, no results found!
                            </div>
                            <div
                                className="searchElse"
                                style={{ textAlign: "center" }}
                            >
                                Please check the spelling or try searching for
                                something else
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-center">
                        Top{" "}
                        {props.category.charAt(0).toUpperCase() +
                            props.category.slice(1)}{" "}
                        Headlines
                    </h2>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={
                            articles.length !== totalResults && newPageLength
                        }
                        // newPageLength is used because sometimes the total results in the news api pages are more
                        //than actual number of pages, which is the error is the NEWS api API
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <Container>
                                <Row className="g-4 py-4">
                                    {articles.map((element) => {
                                        return (
                                            <Col
                                                key={element.url}
                                                // md={{
                                                //     span: span,
                                                //     offset: offset,
                                                // }}

                                                md={6} // medium devices - 6columns per element (12/6=2 i.e. only 2 cards per row)
                                                lg={4} // large devices - 12/4=3 i.e. 3 cards per row
                                            >
                                                {/* // url will be unique and can be used as a key */}
                                                <NewsItem
                                                    title={element.title}
                                                    description={
                                                        element.description
                                                    }
                                                    imageURL={
                                                        element.urlToImage
                                                    }
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
                        </div>
                    </InfiniteScroll>
                </>
            )}
        </>
    );
}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

// export class News extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//       newPageLength:1
//     };
//     this.capitalizedCategory =
//       this.props.category === "general"
//         ? ""
//         : this.props.category.charAt(0).toUpperCase() +
//           this.props.category.slice(1) +
//           "-";
//     document.title = `${this.capitalizedCategory}NewsMonkey`;
//   }
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   async updateNews(page_change) {
//     // this.setState({ loading: true });
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=${this.props.APIKey}&page=${
//       this.state.page + page_change
//     }&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//       page: this.state.page + page_change,
//     });
//     this.props.setProgress(100);
//   }
//   async componentDidMount() {
//     this.updateNews(0);
//   }

//   fetchMoreData = async() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=${this.props.APIKey}&page=${
//       this.state.page + 1
//     }&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//       page: this.state.page + 1,
//       newPageLength:parsedData.articles.length
//     });

//   };

//   handleNextClick = async () => {
//     this.updateNews(1);
//   };
//   handlePrevClick = async () => {
//     this.updateNews(-1);
//   };

//   render() {
//     let span = 4;
//     let offset = 0; //offset not needed

//     return (
//       <>
//         <h2 className="text-center my-3">
//           Top{" "}
//           {this.props.category.charAt(0).toUpperCase() +
//             this.props.category.slice(1)}{" "}
//           Headlines
//         </h2>
//         {this.state.loading && <Spinner />}

//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length != this.state.totalResults && this.state.newPageLength}
//             // this.state.newPageLength is used because sometimes the total results in the news api pages are more
//             //than actual number of pages, which is the error is the NEWS api API
//             loader={<Spinner />}
//           >
//             <div className="container">
//             <Container>
//             <Row className="my-3">
//               {this.state.articles.map((element) => {
//                 return (
//                   <Col key={element.url} md={{ span: span, offset: offset }}>
//                     {/* // url will be unique and can be used as a key */}
//                     <NewsItem
//                       title={element.title}
//                       description={element.description}
//                       imageURL={element.urlToImage}
//                       newsURL={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </Col>
//                 );
//               })}
//             </Row>
//             </Container>
//             </div>
//           </InfiniteScroll>

//         {/* <div className="d-flex justify-content-between my-3">
//           <Button
//             variant="primary"
//             disabled={this.state.page <= 1}
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </Button>
//           <Button
//             variant="primary"
//             disabled={
//               this.state.page * this.props.pageSize >= this.state.totalResults
//             }
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </Button>
//         </div> */}
//         </>
//     );
//   }
// }

// export default News;
