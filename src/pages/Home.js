import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import MenuApi from '../api/menu'
import {
    useHistory
  } from "react-router-dom";

const Home = (props) => {

    let [products, setProducts] = useState([])
    const history = useHistory()
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessId, userId} = parsed;
    const notLogin = !userId && zone && businessId

    if (!(zone && businessId)) {
        history.push("/notfound")
    }

    useEffect(() => {

        const fetchProduct = async () => {
            let products = await MenuApi.getProducts(businessId, zone, userId);
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
