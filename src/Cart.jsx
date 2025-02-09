import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from './GlobalState'

function Cart() {
  const { cart, setCart } = useContext(GlobalContext);

  function getCartBySessionId(sessionId) {
    axios.get(`http://localhost:8081/session/${sessionId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      setCart(response.data)
    })
  }

  useEffect(() => {
    getCartBySessionId('12345')
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        {cart != null && cart.length > 0 && cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800 truncate">{item.name}</p>
              <h6 className="text-lg text-gray-600">${item.unitPrice}</h6>
              <h6 className="text-md text-gray-600">Quantity: {item.quantity}</h6>
            </div>
            <button className="text-red-500 hover:text-red-700 font-semibold">
              Remove
            </button>
          </div>
        ))}
        {/* If cart is empty */}
        {cart != null && cart.length === 0 && (
            <div className="flex justify-center items-center h-32">
              <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
            </div>
        )}
      </div>
    </div>);
}

export default Cart
