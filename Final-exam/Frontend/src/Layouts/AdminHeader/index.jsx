import React from 'react'
import {NavLink} from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const AdminHeader = () => {
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
                        <NavLink to={"/admin/"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/add"}>Add</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/table"}>Table</NavLink>
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
        <div className="other">

        </div>

    </header>
  )
}

export default AdminHeader