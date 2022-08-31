import React from 'react';
import Layout from '../Components/Layout/layout';
import '../css/styles.css';


const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>   
    )
}

export default MyApp