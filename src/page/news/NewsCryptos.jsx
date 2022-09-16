import React,{useState} from "react";
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from "../../services/CryptoNewApi"
import Loader from "../../components/loader/loader";
const NewsCryptos = ({ simplified})=>{
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    // if (!cryptoNews?.value) return <Loader />;
    console.log("data1",cryptoNews)

    return(
        <>
        <Row gutter={[32, 32]}>

        </Row>
        </>
    )
}
export default NewsCryptos