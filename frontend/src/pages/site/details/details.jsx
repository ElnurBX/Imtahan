import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import axios from 'axios';
const Detail = () => {
    const {id}= useParams()
    const [det,setdet]=useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Plants/${id}`).then((res)=>{
            setdet({...res.data})
        })
    },[]);
    const {title,img,disc,subtitle,price,_id}=det
  return (
    <>
     <Helmet>
    <title>{title}</title>
    </Helmet>
    <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={img}  className='w-100' alt="" />
            </div>
            <div className="col-12  col-md-6">
              <h1>{title}</h1>
              <p>{disc}</p>
              <p>{price}</p>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default Detail
