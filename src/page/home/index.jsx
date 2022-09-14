import React from 'react';
import styles from './styles.module.scss'
import {useGetCryptosQuery} from '../../services/CryptoApi'
const Home = ()=>{
    const {data,isFech} = useGetCryptosQuery();
    console.log(data)
    return(
        <>
            <h1 className={styles.title}>home</h1>
        </>
    )
}
export default Home