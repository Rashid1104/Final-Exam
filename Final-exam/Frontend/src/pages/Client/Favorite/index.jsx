import React, { useContext } from 'react'
import { FavContext } from '../../../components/context/FavProvider'
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";

const Favorite = () => {
  const { favorite, ToggleFav, DeleteAllfav } = useContext(FavContext)
  console.log(favorite);


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button className='btn' onClick={() => { DeleteAllfav() }}>Clear All Favorite</button>
          </div>
        </div>
        <div className="row">
          {favorite ? favorite.map((m) => {
            return <div className="col-md-4" key={m._id}>
              <div className="img">
                <img src={m.img} alt={m.name} width={300} />
              </div>
              <div className="desc">
                <h4>{m.name}</h4>
                <span>{m.price}</span>
                <div className="prov">
                  <button className='btn'><NavLink to={`details/${m._id}`}><IoIosInformationCircle /></NavLink></button>
                  <button className='btn'
                    style={{ color: favorite.find((q) => q._id === m._id) ? "red" : "" }}
                    onClick={() => { ToggleFav(m) }}><FaHeart /></button>
                  {/* <button className='btn' onClick={() => { AddToBasket(m) }}><IoBagAdd /></button> */}

                </div>


              </div>
            </div>
          }) : <h1>There is not Favorite Yet!!!</h1>}
        </div>
      </div>
    </div>
  )
}

export default Favorite