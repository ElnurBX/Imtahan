
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
import Carusel from '../../../components/carusel/Carusel'
import CrudCard from '../../../components/CrudCard/CrudCard'
import CUSTOMFLOWER from '../../../components/CUSTOMFLOWER/CUSTOMFLOWER'
import Finalsection from '../../../components/Finalsection/Finalsection'
import ServicesSection from '../../../components/ServicesSection/ServicesSection'
    import MainContext from '../../../context/context'

    const Home = () => {
        const {data,toggelwish} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main >
                    <Carusel/>
                    <ServicesSection/>
                    <CrudCard data={data} toggelwish={toggelwish}/>
                    <CUSTOMFLOWER/>
                    <Finalsection/>
                </main>
        </>
        )
    }
    export default Home
