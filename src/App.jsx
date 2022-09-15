import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Exchanges from "./page/exchanges/exchanges";
import Home from "./page/home";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <Navbar />
        </Sider>
        <Layout>
          <Content style={{ padding: '0 60px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Exchanges />} />
            </Routes>
          </Content>
        </Layout>

        <Footer className="footer"></Footer>
      </Layout>
    </div>
  );
}

export default App;
