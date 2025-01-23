import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./index.css"

const Details = () => {
  const [medicine, setMedicine] = useState(null)
  const { id } = useParams()
  const DB_URL = "http://localhost:8080"

  const getMedicines = async () => {
    try {
      const res = await axios(`${DB_URL}/medicines/${id}`)
      setMedicine(res.data.medicine)
      console.log(res.data.medicine);
    } catch (error) {
      console.log(error.message);

    }
  }
  useEffect(() => {
    if (id) {
      getMedicines()
    }

  }, [id])
  return (
    <div>
      <div className="container">
        {medicine && (
          <div className="row row-details" key={medicine._id}>
            <div className="col-md-6">
              <img src={medicine.img} alt={medicine.name} width={400} />
            </div>
            <div className="col-md-6">
              <h1>{medicine.name}</h1>
              <span>$ {medicine.price.toFixed(2)}</span>
              <p>Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis lacinia posuere metus eget ligula ipsum maximus lobortis nec imperdiet.</p>
              <div className="btn-go">
                <button className='btn-back'><NavLink to={"/"}>Go Back</NavLink></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Details