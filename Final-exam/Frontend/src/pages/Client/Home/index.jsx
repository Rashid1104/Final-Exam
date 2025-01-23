import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FavContext } from '../../../components/context/FavProvider'
import { FaHeart } from "react-icons/fa";
import { BasketContext } from '../../../components/context/BasketProvider';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import "./index.css"
import { IoSunnyOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
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
  const FilteredMedicine = medicines.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  useEffect(() => {
    getMedicines()

  }, [])
  return (
    <div>
      <div className="sec-1">
        <div className="back-img-logo">
          <div className="container">
            <div className="row cent">
              <div className="col-md-6 ">
                <h1 className='logo-h1'>The fine refreshing</h1>
                <p>Phosfluorescently maintain impactful process.</p>
                <button className='read-more'>Read more</button>
              </div>
              <div className="col-md-6">
                <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" width={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2">
        <div className="container">
          <h1 className='abuot-us'>about us</h1>
          <div className="row cols-abu-row">
            <div className="col-md-4 cols-abu">
              <FaRegHeart className='ic' />
              <h6>MADE WITH LOVE</h6>
              <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
            </div>
            <div className="col-md-4 cols-abu">
              <BsEmojiSmile className='ic' />
              <h6>FOR YOUR HAPPINESS</h6>
              <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
            </div>
            <div className="col-md-4 cols-abu">
              <IoSunnyOutline className='ic' />
              <h6>NATURAL CARE</h6>
              <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-3">
        <div className="container">
          <div className="row cent">
            <div className="col-md-6 cols-img">
              <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" width={500} />
            </div>
            <div className="col-md-6">
              <h3 className='sec3-h1'>Devoted to wonderful beauty</h3>
              <span className='sec3-span'>With 30-minute premium treat</span>
              <p className='sec3-p'>Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis lacinia posuere metus eget ligula ipsum maximus lobortis nec imperdiet.</p>
              <button className='read-more'>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-4">
        <div className="container">
          <h1 className='abuot-us'>Our products</h1>
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
                    <button className='btn info'><NavLink to={`details/${m._id}`}><IoIosInformationCircle /></NavLink></button>
                    <button className='btn'
                      style={{ color: favorite.find((q) => q._id === m._id) ? "red" : "", fontSize: "1.5rem" }}
                      onClick={() => { ToggleFav(m) }}
                    ><FaHeart /></button>
                    <button className='btn bas' onClick={() => { AddToBasket(m) }}><IoBagAdd /></button>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="sec-5">
        <div className="container">
          <div className="row cent">
            <div className="col-md-6 ">
              <h2 className='logo-h6'>CONTACT US</h2>
              <span className='to-get'>To get special offers to your email</span>
              <ul className='sec-3-ul'>
                <li className='li-sec-3'>Amsterdam CA 90291</li>
                <li className='li-sec-3'>email@site.com</li>
                <li className='li-sec-3'>+1 (234) 56-78</li>
                <li className='li-sec-3'>@natural.cosmetic</li>
              </ul>

            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder='Name*' className='first-col-6' />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder='Email*' className='first-col-6' />
                </div>
                <div className="col-sm-12">
                  <textarea type="text" placeholder='Message' className='second-col-6' />
                </div>
                <div className="div">
                  <button className='read-more'>Send Message</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" width={140} />
            </div>
            <div className="col-md-3">
              <ul className='sec-3-ul'>
                <li className='li-sec-3'>ABOUT</li>
                <li className='li-sec-3'>FAQ</li>
                <li className='li-sec-3'>PRODUCTS</li>
                <li className='li-sec-3'>TERMS</li>
                <li className='li-sec-3'>POLICY</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className='sec-3-ul'>
                <li className='li-sec-3'>INSTAGRAM</li>
                <li className='li-sec-3'>TWITTER</li>
                <li className='li-sec-3'>FACEBOOK</li>
                <li className='li-sec-3'>PINTEREST</li>
                <li className='li-sec-3'>BLOG</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
              <form action="" className='form'>
                <input type="text" placeholder='Your Email' className='end-input' />
                <button className='btn-send'>Send</button>
              </form>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home