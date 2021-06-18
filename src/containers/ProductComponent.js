import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log("ProductComponent =================================> ", products);
    const productList = products.map((product) => {
        const {id, title, price, image, category, description} = product;
        return (
            <div className="four wide column" key={id} >
                <div className="ui link cards">
                    <div className="ui card" >
                        <div className="image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                            <div className="description">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <> {productList} </>
}

export default ProductComponent
