import React from "react";
import { BrowserRouter as Router, Route, Link,  Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import Navbar from "./components/navbar/Navbar";
import Exchanges from "./page/exchanges/exchanges";
import Home from "./page/home";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Exchanges />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
