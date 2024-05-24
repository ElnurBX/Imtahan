    import { Formik } from 'formik';
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import axios from 'axios';
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <div>
                <Formik
                initialValues={{ title: '',img:'', price: '' ,subtitle:'',discrip:''}}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                    errors.title = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    axios.post("http://localhost:8080/api/Plants",values).then((res)=>{
                        setdata([...res.data])
                    })
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder='title'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && errors.title}
                    <input
                        type="text"
                        name="img"
                        placeholder='img'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.img}
                    />
                    {errors.img && touched.img && errors.img}
                    <input
                        type="text"
                        name="subtitle"
                        placeholder='subtitle'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subtitle}
                    />
                    {errors.subtitle && touched.subtitle && errors.subtitle}
                    <input
                        type="text"
                        name="discrip"
                        placeholder='discrip'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.discrip}
                    />
                    {errors.discrip && touched.discrip && errors.discrip}
                    <input
                        type="number"
                        name="price"
                        placeholder='price'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                    />
                    {errors.price && touched.price && errors.price}
                    <button type="submit" >
                        Submit
                    </button>
                    </form>
                )}
                </Formik>
                </div>
        </>
        )
    }
    export default Add