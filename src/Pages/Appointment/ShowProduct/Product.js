import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Product = ({product}) => {
    const { name, image, resname, originalPrice, resalelPrice, yearofUse, location, category } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}!</h2>
                    <p>original Price: {originalPrice}</p>
                    <p>resalelPrice Price: {resalelPrice}</p>
                    <p>resname: <BsFillArrowRightCircleFill className="inline text-[#2724fb] mb-1 mr-2" /> {resname}</p>
                    <p>yearofUse: {yearofUse}</p>
                    <p>location: {location}</p>
                    <p>category: {category}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to='/appointment'>Buy Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;