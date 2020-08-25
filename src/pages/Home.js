import React, { useState, useEffect } from 'react'
import queryString from 'querystring'
import ProductList from '../components/ProductList'
import OrderList from '../components/OrderList'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Api from '../api/menu'
import {
    useHistory
  } from "react-router-dom";
import { 
    initiateSocket, 
    disconnectSocket, 
    subscribeToAddOrder, 
    subscribeToRemoveOrder, 
    subscribeToCancelOrder,
    subscribeToPlacedOrder,
    subscribeToUpdateStatusOrder,
    subscribeToCheckBill
} from '../api/socket'
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';

const Home = (props) => {

    let [userId, setUserId] = useState("")
    let [products, setProducts] = useState([])
    let [orders, setOrders] = useState([])
    let [billing, setBilling] = useState({})
    let [ openMenu, setOpenMenu ] = useState(false)
    const history = useHistory()
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessId} = parsed;
    const [isCheckBill, setCheckBill] = useState(false);

    const closeAlert = () => {
        setCheckBill(false);
    };

    const showCheckBillAlert = () => {
        setCheckBill(true);
    };

    useEffect(() => {
        if (zone && userId) initiateSocket(zone)

        subscribeToAddOrder((err, order) => {
            if (err) return
            fetchOrder()
        })

        subscribeToRemoveOrder((err) => {
            if (err) return
            fetchOrder()
        })

        subscribeToPlacedOrder((err) => {
            if (err) return
            fetchOrder()
            fetchBilling()
        })

        subscribeToCancelOrder((err) => {
            if (err) return
            fetchBilling()
        })

        subscribeToUpdateStatusOrder((err) => {
            if (err) return
            fetchBilling()
        })

        subscribeToCheckBill((err) => {
            showCheckBillAlert()
        })

        return () => {
            disconnectSocket()
        }
    }, [zone, userId])

    useEffect(() => {

        const fetchProduct = async () => {
            let products = await Api.getProducts(businessId, zone, userId);
            setProducts(products)
        }
    
        const fetchOrder = async () => {
            let orders = await Api.getOrders(businessId, zone, userId, "incart");
            setOrders(orders)
        }
    
        const fetchBilling = async () => {
            let billing = await Api.getBilling(businessId, zone, userId);
            console.log(billing);
            setBilling(billing)
        }

        if (!zone && !businessId) {
            history.push(`/notfound`)
            return
        }

        let userId = localStorage.getItem("userId")
        console.log("userid", userId);
        if (!userId) {
            history.push(`/emenu/login?businessId=${businessId}&zone=${zone}`)
            return
        }

        setUserId(userId)
        fetchProduct()
        fetchOrder()
        fetchBilling()

    }, []);

    const fetchOrder = async () => {
        let orders = await Api.getOrders(businessId, zone, userId, "incart");
        setOrders(orders)
    }

    const fetchBilling = async () => {
        let billing = await Api.getBilling(businessId, zone, userId);
        console.log(billing);
        setBilling(billing)
    }

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
        setOpenMenu(true)
        await Api.placeOrders(businessId, zone, userId);
        let orders = await Api.getOrders(businessId, zone, userId, "incart")
        setOrders(orders)
    }

    const checkBill = async() => {
        await Api.checkBill(businessId, zone, userId)
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
                    <div style={{height:"85vh", overflowY:"scroll"}}>
                        <div>
                            <OrderList
                                orders={billing.orders}
                            />
                        </div>
                    </div>
            }

            {
                !openMenu ?
                    null
                :
                <div style={{marginBottom: "6vh",height:"9vh", backgroundColor:"white", display:"flex", justifyContent: "space-between", alignItems:"center", padding: "0 12px", zIndex:5}}>
                    <span>ราคารวมทั้งหมด {billing.totalPrice}</span>
                    <Button variant="contained" color="primary" onClick={checkBill}>เรียกเก็บเงิน</Button>
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
            <Backdrop open={isCheckBill} onClick={closeAlert} style={{zIndex:"10000"}}>
                <Paper>
                    <h1>กำลังเรียกเก็บเงิน</h1>
                    <span>โปรดรอสักครู่</span>
                </Paper>
            </Backdrop>
        </div>
    )
}

export default Home
