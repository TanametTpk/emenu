import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EmptyIcon from '../assets/icons/photoEmpty.svg';

const OrderStatus = ({ name, price, orderCount, status }) => {
    return (
        <div>
            <span>{name} {price} * {orderCount} = {price * orderCount}</span>
            <span>status = {status}</span>
        </div>
    )
}

export default OrderStatus
