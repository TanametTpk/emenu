import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import ProductList from '../components/ProductList'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuApi from '../api/menu'
import {
    useHistory
  } from "react-router-dom";
import menu from '../api/menu'

let menus = [
    {
        _id: "1",
        name: "ข้าว",
        price: 10,
        photo: "https://www.cpbrandsite.com/contents/tips_tricks/wkkwia2eay945al9mxxirlwhyrx99jsbljdbstkq.png"
    },
    {
        _id: "2",
        name: "ปลากระพงทอดน้ำปลา",
        price: 390,
        photo: "https://img.wongnai.com/p/256x256/2019/03/10/6e25c3f56edf4ad2bcdfff3d280403d9.jpg"
    }
]

const Home = (props) => {

    let [userId, setUserId] = useState("")
    let [products, setProducts] = useState([])
    const history = useHistory()
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessId} = parsed;
    console.log(parsed);

    // if (!(zone && businessId)) {
    //     history.push("/notfound")
    // }

    useEffect(() => {

        const fetchProduct = async () => {
            // let products = await MenuApi.getProducts(businessId, zone, userId);
            // console.log(products);
            // setProducts(products)
            setProducts(menus)
        }

        let userId = localStorage.getItem("userId")
        if (!userId) {
            history.push(`/login?businessId=${businessId}&zone=${zone}`)
        }

        setUserId(userId)
        fetchProduct()

    }, []);

    return (
        <div>
            <div style={{height:"94vh"}}>
                <ProductList products={products} />
            </div>

            <AppBar position="fixed" style={{bottom:0, top: "auto", backgroundColor: "white"}}>
                <Grid
                    container
                    style={{height:"6vh"}}
                >

                    <Grid item xs={6}>
                        <Button
                            color="primary" 
                            style={{height:"100%", width:"100%"}}
                        >
                                ดูรายการอาหารที่สั่ง
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            color="primary" 
                            style={{height:"100%", width:"100%"}}
                        >
                                สั่งอาหาร
                        </Button>
                    </Grid>

                </Grid>
            </AppBar>
        </div>
    )
}

export default Home