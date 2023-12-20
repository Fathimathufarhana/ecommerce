import React, { useEffect, useState } from 'react'
import Card from "./Card"
import axios from "axios"

const Product = () => {
    const [product, setProduct] = useState([])


    const fetchproduct = async () => {
        try {
            const response = await axios.get('http://localhost:5002/api/all');
            setProduct(response.data);

        } catch (error) {
            console.error('Error fetching product:', error.message);
        }
    }

    useEffect(() => {
        fetchproduct();
    })

    return (
        <div style={{display:'flex', gap:"3rem", flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {
                product.map((item, index) => {
                    return (
                        <Card data={item} />
                    )
                })
            }
        </div>
    )
}

export default Product