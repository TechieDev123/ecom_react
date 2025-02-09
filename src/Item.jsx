import React, { useContext, useState } from 'react'
import axios from 'axios'

function Item(props) {

  const [added, setAdded] = useState(false)

  async function addToCart(sku) {
    const data = {}
    axios.put(`http://localhost:8081/session/12345/cart/${sku}`, data, {
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(response => {
      setAdded(true)
    })
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col space-y-4 p-4">
        <div className="relative w-full h-48">
          <img
            src={props.item.imageUrl}
            alt={props.item.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-semibold text-lg text-gray-800">{props.item.name}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl text-black-600 font-bold">₹{props.item.unitPrice}</span>
            <button onClick={(e) => addToCart(props.item.sku)} className="text-blue-500 hover:text-blue-700 font-medium">{added ? 'Added' : 'Add to Cart'}</button>
          </div>
          <p className="text-sm text-gray-500">{props.item.category}</p>
          <p className="text-sm text-gray-500">
            {props.item.ratings} ({props.item.noOfRatings}) reviews
          </p>
        </div>
      </div>
    </div>
  )
}

export default Item