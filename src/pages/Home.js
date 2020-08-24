import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import ProductList from '../components/ProductList'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Api from '../api/menu'
import {
    useHistory
  } from "react-router-dom";

const Home = (props) => {

    let [userId, setUserId] = useState("")
    let [products, setProducts] = useState([])
    let [orders, setOrders] = useState([])
    let [ openMenu, setOpenMenu ] = useState(false)
    const history = useHistory()
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessId} = parsed;

    useEffect(() => {

        const fetchProduct = async () => {
            let products = await Api.getProducts(businessId, zone, userId);
            setProducts(products)
        }

        const fetchOrder = async () => {
            let orders = await Api.getOrders(businessId, zone, userId, "incart");
            setOrders(orders)
        }

        let userId = localStorage.getItem("userId")
        if (!userId) {
            history.push(`/login?businessId=${businessId}&zone=${zone}`)
        }

        setUserId(userId)
        fetchProduct()
        fetchOrder()

    }, []);

    const onAddOrder = async (product) => {
        let remoteOrder = await Api.addOrder(businessId, zone, userId, product._id, 1)
        let order = orders.find(o => o._id === remoteOrder._id)
        if (!order) {
            setOrders([
                ...orders,
                remoteOrder
            ])
            return
        }

        setOrders(orders.map(o => {
            if (o._id === order._id) {
                return remoteOrder
            }
            return o
        }))
    }

    const onRemoveOrder = async (product) => {
        let order = orders.find(o => o.product === product._id)
        if (!order) return
        else{
            await Api.removeOrCancelOrder(businessId, zone, userId, order._id)
        }

        order.quantity -= 1
        setOrders(
            orders.map(o => {
                if (o.product === order.product._id) {
                    return order
                }
                return o
            }).filter(o => o.quantity > 0)
        )
    }

    const sendOrder = async() => {
        await Api.placeOrders(businessId, zone, userId);
        let orders = await Api.getOrders(businessId, zone, userId, "incart")
        setOrders(orders)
    }

    return (
        <div>
            {
                !openMenu ?
                    <div style={{height:"94vh", overflowY:"scroll"}}>
                        <ProductList
                            products={products} 
                            onAdd={onAddOrder}
                            onRemove={onRemoveOrder}
                            orders={orders}
                        />
                    </div>
                :
                    <div style={{height:"94vh", overflowY:"scroll"}}>
                        orders
                    </div>
            }

            <AppBar position="fixed" style={{bottom:0, top: "auto", backgroundColor: "white"}}>
                <Grid
                    container
                    style={{height:"6vh"}}
                >

                    <Grid item xs={6}>
                        <Button
                            color="primary" 
                            style={{height:"100%", width:"100%", backgroundColor: openMenu ? "lightGray" : ""}}
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                                ดูรายการอาหารที่สั่ง
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            color="primary" 
                            style={{height:"100%", width:"100%"}}
                            onClick={sendOrder}
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
