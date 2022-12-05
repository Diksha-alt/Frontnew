import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Header=()=>{
	return(
		<>
		<div className="d-flex justify-content-between black-bg px-5 py-2">
		<nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
			  <div className="container-fluid pe-0">
			    <a className="navbar-brand text-white text-end" href="#">
			    	{/* <img src={Logo} className="w-50"/> */}Trendz
			    </a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
			        <li className="nav-item">
			          <a className="nav-link active text-white fw-bold mx-2" aria-current="page" href="#">Women Ethnic</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">Women Westerns</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">Men</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">Kids</a>
			        </li>
					<li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">Electronics</a>
			        </li>
					<li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">Beauty & Health</a>
			        </li>
					<li className="nav-item">
			          <NavLink to="/login" className="nav-link text-white fw-bold mx-2" >LOGIN</NavLink>
			        </li>
					<li className="nav-item">
			          <NavLink to="/signup" className="nav-link text-white fw-bold mx-2" >Register</NavLink>
			        </li>
			        {/*<li className="nav-item dropdown">
			          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			            Dropdown
			          </a>
			          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			            <li><a className="dropdown-item" href="#">Action</a></li>
			            <li><a className="dropdown-item" href="#">Another action</a></li>
			            <li><hr className="dropdown-divider" /></li>
			            <li><a className="dropdown-item" href="#">Something else here</a></li>
			          </ul>
			        </li>*/}
					
			      </ul>
			      
			      
			    </div>

			  </div>
			</nav>
			<div className="sidebar-btn-wrapper d-flex align-items-center">
				<ul className='d-flex align-items-center m-0'>
					{/* <li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">
						<i class="fa fa-user text-white fs-4 me-4" aria-hidden="true"></i>
					  </a>
			        </li> */}
					<li className="nav-item">
			          <a className="nav-link text-white fw-bold mx-2" href="#">
					  <i class="fa fa-shopping-cart text-white fs-4 me-4" aria-hidden="true"></i>
						</a>
			        </li>
				</ul>
				<form className="d-flex">
			        {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />*/}
			        <i class="fa fa-search text-white fs-4 me-4" aria-hidden="true"></i>

			        {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
			    </form>
			    {/* <a  href="#" className="btn sidebar-btn" >
			      	<span></span>
			      	<span></span>
			      	<span></span>
			    </a> */}
			</div>
			</div>

		</>

		)

}


export default Header




