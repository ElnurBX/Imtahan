import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Wishlist = () => {
    const {wish,toggelwish} = useContext(MainContext)
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <main>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">img</th>
                    <th scope="col">discription</th>
                    <th scope="col">Subtitle</th>
                    <th scope="col">price</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wish.map((item,index)=>{
                            const {title,img,disc,subtitle,price,_id}=item
                            return(
                                <tr>
                                <th scope="row">{index}</th>
                                <td>{title}</td>
                                <td>{img}</td>
                                <td>{disc}</td>
                                <td>{subtitle}</td>
                                <td>{price}</td>
                                <td><button onClick={()=>toggelwish(item)} className='btn btn-danger'> dislike</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </main>
    </>
  )
}

export default Wishlist