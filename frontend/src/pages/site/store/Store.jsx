
    import React, { useContext } from 'react'
import { useState } from 'react'
    import { Helmet } from 'react-helmet'
    
import CrudCard from '../../../components/CrudCard/CrudCard'

    import MainContext from '../../../context/context'

    const Store = () => {
        const {data,toggelwish} = useContext(MainContext)
        const [sorted ,setsorted]=useState([])
        return (
        <>
                <Helmet>
                    <title>Store</title>
                </Helmet>
                <main >
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <select name="" id="">
                                    <option value="1">A-Z</option>
                                    <option value="2">Z-A</option>
                                    <option value="3">low</option>
                                    <option value="4">high</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <CrudCard data={data} toggelwish={toggelwish}/>
                </main>
        </>
        )
    }
    export default Store
