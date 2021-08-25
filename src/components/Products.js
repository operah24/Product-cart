import React from 'react'
import { product } from '../data'
const Products = () => {
    return (
        <div>
            <p className="head">AVAILABLE PRODUCE</p>
            <div className="product">
                {product.map((items) => (
                <div className="products">
                    <img src={items.product_img} alt="pro" className="image"/>
                    <p className="name">{items.name} </p>
                    <p className="price">&#8358;{ items.price}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products
