import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FavContext } from '../../../components/context/FavProvider'
import { FaHeart } from "react-icons/fa";
import { BasketContext } from '../../../components/context/BasketProvider';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";

const Shop = () => {
  const [medicines, setMedicines] = useState([])
  const [medicinesCopy, setMedicinesCopy] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const DB_URL = "http://localhost:8080"

  const { favorite, ToggleFav } = useContext(FavContext)
  const { AddToBasket } = useContext(BasketContext)
  const getMedicines = async () => {
    try {
      const res = await axios(`${DB_URL}/medicines`)
      setMedicines(res.data.medicines)
      setMedicinesCopy(res.data.medicines)
      console.log(res.data.medicines);
    } catch (error) {
      console.log(error.message);

    }
  }
  const ToggleChange = async (e) => {
    let SortedMedicines = null
    const change = e.target.value
    if (change === "asc") {
      SortedMedicines = [...medicines].toSorted((a, b) => a.price - b.price)
    } else if (change === "desc") {
      SortedMedicines = [...medicines].toSorted((a, b) => b.price - a.price)
    } else {
      SortedMedicines = [...medicinesCopy]

    }
    setMedicines([...SortedMedicines])

  }

  const FilteredMedicine = medicines.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  useEffect(() => {
    getMedicines()

  }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <input type="search" placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <select name="" id="" onChange={ToggleChange}>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
              <option value="default">DEFAULT</option>
            </select>
          </div>
        </div>
        <div className="row">
          {medicines.length > 0 && FilteredMedicine.map((m) => {
            return <div className="col-md-4" key={m._id}>
              <div className="img">
                <img src={m.img} alt={m.name} width={300} />
              </div>
              <div className="desc">
                <h4>{m.name}</h4>
                <span>$ {m.price.toFixed(2)}</span>
                <div className="prov">
                  <button className='btn'><NavLink to={`details/${m._id}`}><IoIosInformationCircle /></NavLink></button>
                  <button className='btn'
                    style={{ color: favorite.find((q) => q._id === m._id) ? "red" : "" }}
                    onClick={() => { ToggleFav(m) }}
                  ><FaHeart /></button>
                  <button className='btn' onClick={() => { AddToBasket(m) }}><IoBagAdd /></button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default Shop