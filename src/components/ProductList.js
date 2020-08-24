import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
    return (
        <div style={{display:"grid", gridTemplateColumns:"1fr", gridGap:"12px", margin:"12px"}}>
            {
                products.map((product, index) => (
                    <ProductItem
                        name={product.name}
                        price={product.price}
                        photo={product.photo}
                    />
                ))
            }
        </div>
    )
}

export default ProductList
