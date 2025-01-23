import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { FavContext } from '../../components/context/FavProvider'
import { BasketContext } from '../../components/context/BasketProvider'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./index.css"

const ClientHeader = () => {
    const { favorite } = useContext(FavContext)
    const { basket } = useContext(BasketContext)
    return (
        <header className='header'>
            <div className="logo">
                <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" width={50} />
                <h5 className='NATURAL'>NATURAL COSMETIC
                </h5>

            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorite"}>Favorite <sup>{favorite.length}</sup></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/basket"}>Basket <sup>{basket.reduce((sum, curr) => sum + curr.quantity, 0)}</sup></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                        <li className='icons'>
                            <FaFacebookF />
                        </li>
                        <li className='icons'>
                            <FaTwitter />
                        </li>
                        <li className='icons'>
                            <FaInstagram />
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default ClientHeader