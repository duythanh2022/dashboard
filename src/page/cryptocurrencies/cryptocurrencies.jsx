import React, { useState } from "react";
import { Card, Row, Col, Input } from "antd";
import {
  useGetCryptosQuery,
  useGetCoinPriceQuery,
} from "../../services/CryptoApi";
import millify from "millify";
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.scss";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const { price, isFechPrice } = useGetCoinPriceQuery();
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    setCryptos(data?.data?.coins);
  }, [data]);

  if(isFetching) return <Loader />;
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((item) => (
          <Col lg={6} key={item.uuid}>
            <Link key={item.uuid} to={`/crypto/${item.uuid}`}>
              <Card
                title={item.name}
                extra={
                  <img
                    alt="example"
                    className={styles.icon}
                    src={item.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price: {millify(item.price)}</p>
                <p>Market Cap: {millify(item.marketCap)}</p>
                <p>Daily Change: {millify(item.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Cryptocurrencies;
