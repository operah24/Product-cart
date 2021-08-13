import React from 'react'
import { product } from '../data'
const Products = () => {
    return (
        <div>
            <h4>AVAILABLE PRODUCE</h4>
            <div className="product">
                {product.map((items) => (
                <div className="products">
                    <img src={items.product_img} alt="pro" className="image"/>
                    <h2 className="name">{items.name} </h2>
                    <h3 className="price">&#8358;{ items.price}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products
