import React from 'react'
import { Link } from 'react-router-dom'
import "./CrudCard.scss"
const CrudCard = ({data,toggelwish}) => {
    return (
    <section className='CrudCard mt-5   '>
        <div className="container">
            <div className="head text-center">
                <h5 className='fs-6 '>OUR FLOWER</h5>
                <h2 className='fs-1'>New Arrivals</h2>
            </div>
            <div className="sorter d-flex justify-content-center">
                <div className="sorter__item active">
                    <button className='btn '>All</button>
                </div>
                <div className="sorter__item ">
                    <button className='btn '>Bouquet</button>
                </div>
                <div className="sorter__item">
                    <button className='btn '>Flower box</button>
                </div>
                <div className="sorter__item">
                    <button className='btn '> Flower shelf</button>
                </div>
                <div className="sorter__item">
                    <button className='btn '>Basket of flower</button>
                </div>
                <div className="sorter__item">
                    <button className='btn '>Gift combos</button>
                </div>
            </div>
            <div className="row  justify-content-start justify-content-xl-around gap-1 row-gap-3 mt-5 ">
                {
                    data.map((item,index)=>{
                        const {title,img,disc,subtitle,price,_id}=item
                        return(
                            <div className="col-10 col-md-2      ">
                                <div className="CrudCard__card">
                                    <div className="CrudCard__card__img">
                                        <img src={img} className="w-100" alt="" />
                                       {subtitle==="" ? "": <span className='Subtitle'>{subtitle}</span>}
                                        <div className="hover-icons">
                                            <button className='btn '>
                                                <img src="https://preview.colorlib.com/theme/florist/img/icon/search.png"  alt="" />
                                            </button>
                                            <button onClick={()=>toggelwish(item)} className='btn '>
                                                <img src="https://preview.colorlib.com/theme/florist/img/icon/heart.png" alt="" />
                                            </button>
                                            <button className='btn '>
                                                <img src="https://preview.colorlib.com/theme/florist/img/icon/bag.png" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="CrudCard__card__test text-center">
                                        <Link to={`/det/${_id}`} className='p-1 fs-4'>{title}</Link>
                                        <div className="hoveredtext">
                                            <p className='price'>${price}</p>
                                            <p  className='addcart'><button className='btn'>ADD TO CART</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    )
}

export default CrudCard
