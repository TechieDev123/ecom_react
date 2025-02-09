import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Item from './Item';
import GlobalContext from './GlobalState';

function Hompage() {

    const { products, setProducts } = useContext(GlobalContext);

    async function getProducts(){
        axios.get('http://localhost:8081/product/all',{
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response=> {
            setProducts(response.data)
        }).catch(error=>console.log(error))
    }

    useEffect(()=>{
        getProducts()
    },[]);

    return (
        <div className="p-4">
            {products != null && products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
            ) : (
                
                    <div className="flex justify-center items-center h-32">
                      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
                    </div>
                  
            )}
        </div>
    )
}

export default Hompage
