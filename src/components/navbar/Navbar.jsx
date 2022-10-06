import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cryptocurrency.png";
import { Avatar, Typography, Menu } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
const Navbar = () => {
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
