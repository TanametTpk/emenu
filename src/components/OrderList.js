import React from 'react'
import EmptyIcon from '../assets/icons/photoEmpty.svg';

const OrderList = ({orders}) => {

    const getStatus = (status) => {
        if (status === "placed") return "กำลังรอยืนยัน"
        else if (status === "process") return "กำลังทำ"
        else if (status === "done") return "เสร็จแล้ว"
        else return status
    }

    return (
        <div style={{display:"grid", gridTemplateColumns:"1fr", gridGap:"12px", margin:"12px"}}>
            {
                orders.map((order, index) => {

                    let product = order.product
                    let photo = product.photo
                    let name = product.name
                    let price = product.price

                    return (
                        <div key={index} style={{display:"grid", height:"120px", gridTemplateColumns:"120px 3fr"}}>
                            {
                                photo && photo.length > 0 ?
                                    <div style={{overflow:"hidden", borderRadius: "16px", position:"relative", background: "black"}}>
                                        <img src={photo + ".jpg"} alt={name} style={{height:"100%", objectFit:"cover", opacity: 0.4}} />
                                        <div style={{position:"absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)", color:"white", fontWeight:"bold"}}>
                                            {
                                                getStatus(order.status)
                                            }
                                        </div>
                                    </div>
                                :
                                <div style={{overflow:"hidden", borderRadius: "16px", position:"relative", background: "black"}}>
                                    <div style={{position:"absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)", color:"white", fontWeight:"bold"}}>
                                        {
                                            getStatus(order.status)
                                        }
                                    </div>
                                </div>
                            }

                            <div style={{
                                padding:"8px 0 8px 18px", 
                                display:"flex", 
                                overflow:"hidden", 
                                justifyContent:"space-between", 
                                alignItems: "flex-start",
                                flexDirection: "column",
                            }}>
                                <h2 style={{margin:0, whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{name}</h2>
                                <span>
                                    ราคา {price} บาท
                                </span>
                                <span>
                                    จำนวน {order.quantity} ที่
                                </span>
                                <span>
                                    ราคารวม { price * order.quantity } บาท
                                </span>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default OrderList
