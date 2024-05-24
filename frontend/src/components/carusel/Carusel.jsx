import React from 'react'
import './Carusel.scss'
const Carusel = () => {
    return (
    <section className='Carusel__section'>
            <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button rounded-circle" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button rounded-circle" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption my-caption d-none d-md-block">
                <h5 className='fs-6' >Fresh Flower & gift shop</h5>
                <h3 className='fs-1'>Making beatiful flowers a part of your life</h3>
                <button className='btn rounded-pill mt-'>  SHOP NOW</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption my-caption d-none d-md-block">
                <h5 className='fs-6'>Fresh Flower & gift shop</h5>
                <h3 className='fs-1'>Some representative placeholder content for the second slide.</h3>
                <button className='btn rounded-pill mt-'>  SHOP NOW</button>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </section>
    )
}

export default Carusel
