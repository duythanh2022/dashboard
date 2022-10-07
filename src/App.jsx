import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Exchanges from "./page/exchanges/exchanges";
import Home from "./page/home";
const {  Content, Footer, Sider } = Layout;

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
              <Route path="/exchanges" element={<Exchanges />} />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer"></Footer>
      </Layout>
    </div>
  );
}

export default App;
