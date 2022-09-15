import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cryptocurrency.png";
import { Avatar, Typography, Menu, Button,Layout } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const { Header, Sider, Content } = Layout;

  return (
    <>
   
      <div className={styles["nav-container"]}  style={{
        width: 256,
      }}>
        <div className={styles["logo-container"]}>
          <Avatar className={styles["avatar-logo"]} size="large" src={Logo} />
          <Typography.Title level={2} className={styles.logo}>
            <Link to="/">Crytoverse</Link>
          </Typography.Title>
        </div>
                <Menu theme="dark" >
                <Menu.Item key="home" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
                  <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key="news" icon={<BulbOutlined />}>
                  <Link to="/news">News</Link>
                </Menu.Item>
              </Menu>
      </div>
     
    </>
  );
};
export default Navbar;
