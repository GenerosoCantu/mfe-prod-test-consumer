import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "header/Header";
import Footer from "header/Footer";
import Menu from "header/Menu";

const App = () => (
  <div>
    <Header />
    <Menu />
    <div>I'm the consumer app</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
