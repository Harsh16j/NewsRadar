import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
    let APIKey = process.env.REACT_APP_NEWS_API; //paste your API key in APIKey variable
    //Get you API Key from https://newsapi.org/
    //APIKey imported from .env.local file which is in .gitignore
    let pageSize = 12;

    const [progress, setProgress] = useState(0);

    return (
        <Router>
            <NavBar />

            <LoadingBar color="#f11946" progress={progress} height={3} />

            <Routes>
                <Route
                    exact
                    path="/business"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="business"
                            pageSize={pageSize}
                            country="in"
                            category="business"
                        />
                    }
                />
                <Route
                    exact
                    path="/entertainment"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="entertainment"
                            pageSize={pageSize}
                            country="in"
                            category="entertainment"
                        />
                    }
                />
                <Route
                    exact
                    path="/"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="general"
                            pageSize={pageSize}
                            country="in"
                            category="general"
                        />
                    }
                />
                <Route
                    exact
                    path="/health"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="health"
                            pageSize={pageSize}
                            country="in"
                            category="health"
                        />
                    }
                />
                <Route
                    exact
                    path="/science"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="science"
                            pageSize={pageSize}
                            country="in"
                            category="science"
                        />
                    }
                />
                <Route
                    exact
                    path="/sports"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="sports"
                            pageSize={pageSize}
                            country="in"
                            category="sports"
                        />
                    }
                />
                <Route
                    exact
                    path="/technology"
                    element={
                        <News
                            APIKey={APIKey}
                            setProgress={setProgress}
                            key="technology"
                            pageSize={pageSize}
                            country="in"
                            category="technology"
                        />
                    }
                />
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
