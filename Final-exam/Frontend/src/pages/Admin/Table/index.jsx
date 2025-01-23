import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const TableMedicine = () => {
  const [medicines, setMedicines] = useState([])
  const DB_URL = "http://localhost:8080"

  const getMedicines = async () => {
    try {
      const res = await axios(`${DB_URL}/medicines`)
      setMedicines(res.data.medicines)
      console.log(res.data.medicines);
    } catch (error) {
      console.log(error.message);

    }
  }

  const DeleteMedicine = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`${DB_URL}/medicines/${id}`)
        await getMedicines()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  useEffect(() => {
    getMedicines()

  }, [])

  return (
    <div>
      <div className="container">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="center">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medicines.map((m) => (
                <TableRow
                  key={m._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <img src={m.img} alt={m.name} width={100} />
                  </TableCell>
                  <TableCell align="left">{m.name}</TableCell>
                  <TableCell align="left">$ {m.price.toFixed(2)}</TableCell>
                  <TableCell align="center"><button className='btn'
                    style={{ color: "red", fontSize: "1.6rem" }}
                    onClick={() => DeleteMedicine(m._id)}><FaTrashAlt /></button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default TableMedicine