import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const BasketContext = createContext([])
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])

    const AddToBasket = async (medicine) => {
        setBasket((bas) => {
            const idx = basket.findIndex((q) => q._id === medicine._id)
            if (idx === -1) {
                return ([...bas, { ...medicine, quantity: 1 }])
            }
            bas[idx].quantity++
            return [...bas]

        })
    }
    const DeleleInBasket = async (medicine) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setBasket((item) => {
                    item.filter((q) => q._id !== medicine._id)

                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const DeleteAllBasket = async () => {
        if (basket.length === 0) {
            Swal.fire({
                title: "Favorite delete?",
                text: "Your Favorite list is Empty!!!!",
                icon: "question"
            });
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    setBasket([])
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }


    }

    const IncToBasket = async (medicine) => {
        setBasket((item) => {
            const found = item.find((q) => q._id === medicine._id)
            found.quantity++
            return [...item]

        })
    }
    const DecToBasket = async (medicine) => {
        setBasket((item) => {
            const found = item.find((q) => q._id === medicine._id)
            if (found.quantity === 0) {
                return [...item].filter((q) => q._id !== medicine._id)
            }
            found.quantity--
            return [...item]

        })
    }

    const AllPrice = async () => {
        return basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
    }
    return (
        <BasketContext.Provider value={{ basket, DeleleInBasket, AddToBasket, DeleteAllBasket, IncToBasket, DecToBasket, AllPrice }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider