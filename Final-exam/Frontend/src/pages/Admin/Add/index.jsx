import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const MedicineSchema = Yup.object().shape({
    img: Yup.string()
        .min(0, 'Too Short!')
        .max(3000, 'Too Long!')
        .required('Required Image!!!!'),
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required Name!!!'),
    price: Yup.number().required('Required price'),
});
const Add = () => {
    const DB_URL = "http://localhost:8080"
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/originals/75/db/cc/75dbcc764b23a1b87fc2c083306da85a.gif" alt="" width={400} />
                    </div>
                    <div className="col-md-4">
                        <h1 style={{ textAlign: "center" }}>Add New Medicine</h1>
                        <Formik
                            initialValues={{
                                img: '',
                                name: '',
                                price: 0,
                            }}
                            validationSchema={MedicineSchema}
                            onSubmit={async (values, { resetForm }) => {
                                // same shape as initial values
                                const medicine = { ...values }
                                const res = await axios.post(`${DB_URL}/medicines`, medicine)
                                console.log(values);
                                resetForm()
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='forms'>
                                    <Field name="img" />
                                    {errors.img && touched.img ? (
                                        <div style={{ color: "red" }}>{errors.img}</div>
                                    ) : null}
                                    <Field name="name" />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}</div>
                                    ) : null}
                                    <Field name="price" type="number" />
                                    {errors.price && touched.price ? <div style={{ color: "red" }}>{errors.price}</div> : null}
                                    <button type="submit" className='add-btn'>Add</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/originals/75/db/cc/75dbcc764b23a1b87fc2c083306da85a.gif" alt="" width={400} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Add