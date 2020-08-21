import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import MenuApi from '../api/menu'

const Home = (props) => {

    let [products, setProducts] = useState([])
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessID, userID} = parsed;

    useEffect(() => {

        const fetchProduct = async () => {
            let products = await MenuApi.getProducts(businessID, zone, userID);
            console.log(products);
            setProducts(products)
        }
        
        fetchProduct()

    }, []);

    return (
        <div>
            test
        </div>
    )
}

export default Home
