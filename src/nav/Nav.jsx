import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import GlobalContext from '../GlobalState';


function Nav() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)

    function submit(e) {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
        <div className="bg-indigo-500 p-4">
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between">
                <h1 className="text-white text-2xl font-semibold">eMart</h1>

                <div className="flex items-center space-x-4">
                    <form onSubmit={submit} className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="item name"
                            name="search"
                            onChange={(e) => setSearchParam(e.target.value)}
                            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                        >
                            Search
                        </button>
                    </form>

                
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/orders" className="text-white hover:text-gray-300">
                                Orders/Returns
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-white hover:text-gray-300">
                                <FaHeart size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-white hover:text-gray-300">
                                <FaShoppingCart size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/customers" className="text-white hover:text-gray-300">
                                <FaUserCircle size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
