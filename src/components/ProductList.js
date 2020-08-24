import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products, onAdd, onRemove, orders }) => {

    const getOrderCount = (product) => {
        let order = orders.find(o => o.product === product._id)
        return order ? order.quantity : 0
    }

    return (
        <div style={{display:"grid", gridTemplateColumns:"1fr", gridGap:"12px", margin:"12px"}}>
            {
                products.map((product, index) => (
                    <ProductItem
                        key={index}
                        name={product.name}
                        price={product.price}
                        photo={product.photo}
                        onAdd={() => onAdd(product)}
                        onRemove={() => onRemove(product)}
                        orderCount={getOrderCount(product)}
                    />
                ))
            }
        </div>
    )
}

export default ProductList
