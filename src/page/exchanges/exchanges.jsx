import React from "react";
import { Collapse, Row, Col, Typography, Avatar,Table } from "antd";
import { useGetCryptoExchangeQuery } from "../../services/CryptoApi";
import styles from "./exchanges.module.scss"
const Exchanges = () => {
    const {data} = useGetCryptoExchangeQuery()
    console.log(data)
    const listData = data?.data?.exchanges
    console.log(listData)
    const dataColumns = [
        {
            title:"Ranking",
            dataIndex:"rank",
            key:"rank"
        },
        {
            title:"Name",
            dataIndex:"name",
            key:"name",
            render:(_,record)=>(
                <Row className={styles["table-name"]} key={record.toString()}> 
                    <Avatar src={record.iconUrl}></Avatar>
                    <span className={styles["coins-name"]}>{record.name}</span>
                </Row>
            ),
            width: 250,
        },
        {
            title:"NumberOfMarkets",
            dataIndex:"numberOfMarkets",
            key:"numberOfMarkets",
            width: 150,
        },
        {
            title:"Price",
            dataIndex:"price",
            key:"price",
            width: 350,
        },
        {
            title:"24hVolume",
            dataIndex:"24hVolume",
            width: 350,
        },
        {
            title:"BTC Price",
            dataIndex:"btcPrice",
            width: 350,
        }


    ]
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
     
      <Table columns={dataColumns} dataSource={listData} />
      
    </>
  );
};
export default Exchanges;
