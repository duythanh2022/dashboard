import React, { useState } from "react";
import {  Row, Col, Input, Card } from "antd";
import { useGetCryptoNewsQuery } from "../../services/CryptoNewApi";
import moment from "moment";
const { Search } = Input;
const { Meta } = Card;

const NewsCryptos = () => {
  const [search, setSearch] = useState("");
  const [count,setCount] = useState(12)
  const { data: cryptoNew } = useGetCryptoNewsQuery({search,count});
  // if(!cryptoNew?.value) return <Loader />
  const onSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={8} offset={16}>
          <Search
            placeholder="search"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        {cryptoNew?.webPages?.value?.map((item, index) => (
          <Col lg={8} key={index}>
            <Card hoverable style={{ height: 300 }}>
            <a href={item.url}>
              <Meta title={item.name} description={item.snippet} />
              <p>{moment(item.dateLastCrawled).format("LLLL")}</p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default NewsCryptos;
