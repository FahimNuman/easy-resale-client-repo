import React, { useEffect, useState } from 'react';
import Product from './Product';

const ShowProduct = () => {

    const [products,setProduct] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default ShowProduct;

