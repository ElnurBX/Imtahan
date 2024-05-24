import React from 'react'
import './Finalsection.scss'
const Finalsection = () => {
    return (
        <section className='Finalsection'>
            <div className="container ">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner text-center">
                    <div class="carousel-item active">
                        <div class="carousel-caption d-none d-md-block">
                            <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt=""  className='mb-4'/>
                        <p className='fs-4'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis similique. Laborum quae voluptas quis nam, porro ad earum autem placeat nulla est expedita maiores dolores sit excepturi eos accusantium. lor Some representative placeholder content for the first slide."</p>
                        <h4>Alejandro Houston</h4>
                        <span>BUNISSMAN</span>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt=""  className='mb-4'/>
                        <p className='fs-4'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis similique. Laborum quae voluptas quis nam, porro ad earum autem placeat nulla est expedita maiores dolores sit excepturi eos accusantium. lor Some representative placeholder content for the first slide."</p>
                        <h4>Alejandro Houston</h4>
                        <span>BUNISSMAN</span>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt=""  className='mb-4'/>
                        <p className='fs-4'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis similique. Laborum quae voluptas quis nam, porro ad earum autem placeat nulla est expedita maiores dolores sit excepturi eos accusantium. lor Some representative placeholder content for the first slide."</p>
                        <h4>Alejandro Houston</h4>
                        <span>BUNISSMAN</span>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </section>
    )
}

export default Finalsection
