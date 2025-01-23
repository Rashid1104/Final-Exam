import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BasketContext } from '../../../components/context/BasketProvider';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import "./index.css"

const Basket = () => {
  const { basket, DeleleInBasket, DeleteAllBasket, IncToBasket, DecToBasket, AllPrice } = useContext(BasketContext)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button className='btn' onClick={() => DeleteAllBasket()}>Clear All</button>


          </div>
          <div className="col-md-4">
            <h1>ALL PRICE:  </h1>
            {/* {AllPrice()} */}

          </div>
        </div>
        <div className="row">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">INCREEMENT</TableCell>
                  <TableCell align="left">COUNT</TableCell>
                  <TableCell align="left">DECREEMENT</TableCell>
                  <TableCell align="left">ALL PRICE</TableCell>
                  <TableCell align="center">DELETE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {basket.map((m) => (
                  <TableRow
                    key={m._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <img src={m.img} alt={m.name} width={80} />
                    </TableCell>
                    <TableCell align="left">{m.name}</TableCell>
                    <TableCell align="left">{m.price}</TableCell>
                    <TableCell align="left"><button className='act' onClick={() => { IncToBasket(m) }}><FaPlus /></button></TableCell>
                    <TableCell align="left">{m.quantity}</TableCell>
                    <TableCell align="left"><button className='act' onClick={() => { DecToBasket(m) }}><FaMinus /></button></TableCell>
                    <TableCell align="left">{m.price * m.quantity}</TableCell>
                    <TableCell align="center"><button className='btn'
                      style={{ color: "red", fontSize: "2rem" }}
                      onClick={() => { DeleleInBasket(m) }}><MdDelete /></button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Basket