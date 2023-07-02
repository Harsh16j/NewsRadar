import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import useDebounce from "./hooks/useDebounce";

export default function App() {
    let APIKey = process.env.REACT_APP_NEWS_API; //paste your API key in APIKey variable
    //Get you API Key from https://newsapi.org/
    //APIKey imported from .env.local file which is in .gitignore
    let pageSize = 12; // number of results to be fetched per search query

    const [progress, setProgress] = useState(0);
    const [query, setQuery] = useState("");
    const debouncedSearchQuery = useDebounce(query, 1000);

    const [errorData, setErrorData] = useState({});

    let categories = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];
    return (
        <Router>
            <NavBar query={query} setQuery={setQuery} />

            <LoadingBar color="#f11946" progress={progress} height={3} />

            <Routes>
                {categories.map((category) => {
                    return (
                        <Route
                            exact
                            key={category}
                            path={`/${category === "general" ? "/" : category}`}
                            element={
                                <News
                                    APIKey={APIKey}
                                    setProgress={setProgress}
                                    key={category}
                                    pageSize={pageSize}
                                    country="in"
                                    category={category}
                                    query={query}
                                    setQuery={setQuery}
                                    debouncedSearchQuery={debouncedSearchQuery}
                                    errorData={errorData}
                                    setErrorData={setErrorData}
                                />
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

// export default class App extends Component {
//   APIKey=process.env.REACT_APP_NEWS_API;
//   pageSize=12;
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({
//       progress:progress
//     })
//     console.log("this",this);
//   }
//   render() {

//     return (
//       <Router>
//         <NavBar />

//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={3}
//       />

//         <Routes>

//           <Route
//             exact path="/business"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" />}
//           />
//           <Route
//             exact path="/entertainment"
//             element={
//               <News APIKey={this.APIKey}  setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />
//             }
//           />
//           <Route
//             exact path="/"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" />}
//           />
//           <Route
//             exact path="/health"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health" />}
//           />
//           <Route
//             exact path="/science"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science" />}
//           />
//           <Route
//             exact path="/sports"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports" />}
//           />
//           <Route
//             exact path="/technology"
//             element={<News APIKey={this.APIKey}  setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology" />}
//           />
//         </Routes>

//       </Router>
//     );
//   }
// }
