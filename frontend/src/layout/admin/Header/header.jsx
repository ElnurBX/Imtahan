
import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
const Header = () => {
return (
    <header className='header mt-1 mb-3'>
        <div className="container">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex  justify-content-between">
                <Link className="navbar-brand" href="#"><img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav gap-3 fs-5">
                    <li className="nav-item">
                    <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/admin'} className="nav-link" href="#">admin</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/admin/add'} className="nav-link" href="#">Add</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/wish'} className="nav-link" href="#">Wish</Link>
                    </li>
                    <li className="nav-item">
                    <Link  to={'/store'} className="nav-link" href="#">Store</Link>
                    </li>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </ul>
                </div>
                <div className="icons">
                    <button>
                        <img src="https://preview.colorlib.com/theme/florist/img/icon/search.png" className='btn ' alt="" />
                    </button>
                    <button>
                        <img src="https://preview.colorlib.com/theme/florist/img/icon/heart.png" className='btn ' alt="" />
                        <span>(0)</span>
                    </button>
                    <button>
                        <img src="https://preview.colorlib.com/theme/florist/img/icon/bag.png" className='btn ' alt="" />
                        <span>(0)   </span>
                    </button>
                </div>
            </div>
        </nav>
        </div>
    </header>
)
}

export default Header
    