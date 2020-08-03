import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar"
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Wrapper>
          <Jumbotron />
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/saved" component={Saved}></Route>
        </Wrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;
