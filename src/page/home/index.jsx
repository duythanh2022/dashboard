import React from "react";
import styles from "./styles.module.scss";
import Cryptocurrencies from "../cryptocurrencies/cryptocurrencies";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../../services/CryptoApi";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Home = () => {
  const { data, isFech } = useGetCryptosQuery(10);
  console.log(data,"home")
  return (
    <>
      <Title level={2}>Global Crypto Status</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={data?.data?.stats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={data?.data?.stats?.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={data?.data?.stats?.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={data?.data?.stats?.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={data?.data?.stats?.totalMarkets}
          />
        </Col>
      </Row>
      <div className={styles["home-heading-container"]}>
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies  simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
    </>
  );
};
export default Home;
