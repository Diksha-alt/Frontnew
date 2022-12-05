import React from "react";

import bgImg1 from "../assets/dots-left.png";
import bgImg2 from "../assets/dots-left.png";
import Img2 from "../assets/banner.webp";

import Img3 from "../assets/banner2.webp";
import Img4 from "../assets/rev-img-4.png";
import Img5 from "../assets/rev-img-5.png";
import Img6 from "../assets/banner3.webp";

<<<<<<< HEAD
const Slider = () => {
  const myStyle1 = {
    backgroundImage: `url(${bgImg1})`,
    backgroundRepeat: "repeat",
    height: "100vh",
  };
  const myStyle2 = {
    // backgroundImage: `url(${bgImg2})`,
    backgroundRepeat: "repeat",
    height: "100vh",
    background: "#000",
  };
  const myStyle3 = {
    backgroundImage: `url(${Img4})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  const myStyle4 = {
    backgroundImage: `url(${Img5})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
=======
const Slider=()=>{

	 const myStyle1={
        backgroundImage: `url(${bgImg1})`,
        backgroundRepeat: 'repeat',
        height:"100vh"
    };
    const myStyle2={
        // backgroundImage: `url(${bgImg2})`,
        backgroundRepeat: 'repeat',
        height:"100vh",
        background:"#000"

    };
    const myStyle3={
        backgroundImage: `url(${Img4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"contain"
        
    };
    const myStyle4={
        backgroundImage: `url(${Img5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"contain",
        
    };
	return(
		<>

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
     
      <div className="carousel-inner">
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
          <div className="carousel-item active" style={myStyle1}>
            <div className="row align-items-center h-100">
              <div className="col-md-6 d-flex align-items-center">
                <div className="carousel-content">
                  {/* <div className="sub-content grey content-font">Powerful Sports Theme</div> */}
                  <h2 className="text-black text-uppercase heading mb-0">
                    Lowest Prices Best Quality Shopping
                  </h2>
                  <p className="grey fs-6 content-font my-4">
                    There are many benefits of shopping online. You can take
                    your time and look at different options to find exactly what
                    you want. It's easy to compare prices online and find
                    exactly what you are looking for.
                  </p>
                  <div className="position-relative">
                    <a
                      className="common-btn text-uppercase read-more bg-black text-white text-decoration-none fw-bold inline-block"
                      href="#"
                    >
                      READ MORE
                    </a>
                    <a
                      className="common-btn text-uppercase bg-white text-black  text-decoration-none fw-bold inline-block border ms-3"
                      href="#"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
<<<<<<< HEAD
                <img src={Img2} className="d-block w-100" alt="..." />
=======
          	      <img src={Img2} className="d-block w-100" alt="..." />
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
              </div>
            </div>
          </div>
          <div className="carousel-item " style={myStyle2}>
<<<<<<< HEAD
            <div className="row h-100 align-items-center">
              <div className="col-md-6 d-flex align-items-center h-100">
                <div className="carousel-content">
                  {/* <div className="sub-content grey content-font">Powerful Sports Theme</div> */}
                  <h2 className="text-white text-uppercase heading mb-0">
                    Lowest Prices Best Quality Shopping
                  </h2>
                  <p className="grey fs-5 content-font my-4">
                    There are many benefits of shopping online. You can take
                    your time and look at different options to find exactly what
                    you want. It's easy to compare prices online and find
                    exactly what you are looking for.
                  </p>
                  <div className="position-relative">
                    <a
                      className="common-btn text-uppercase read-more bg-white text-black text-decoration-none fw-bold inline-block"
                      href="#"
                    >
                      READ MORE
                    </a>
                    <a
                      className="common-btn text-uppercase bg-black text-white  text-decoration-none fw-bold inline-block border ms-3"
                      href="#"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-2-bg" style={myStyle3}>
                  <img src={Img3} className="d-block w-100 h-100" alt="" />
=======
              <div className="row h-100 align-items-center">
                <div className="col-md-6 d-flex align-items-center h-100">
                  <div className="carousel-content">
                    {/* <div className="sub-content grey content-font">Powerful Sports Theme</div> */}
                      <h2 className="text-white text-uppercase heading mb-0">Lowest Prices Best Quality Shopping</h2>
                      <p className="grey fs-5 content-font my-4">
                      There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for.</p>
                      <div className="position-relative">
                        <a className="common-btn text-uppercase read-more bg-white text-black text-decoration-none fw-bold inline-block" href="#">READ MORE</a>
                        <a className="common-btn text-uppercase bg-black text-white  text-decoration-none fw-bold inline-block border ms-3" href="#">
                        CONTACT US</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slide-2-bg" style={myStyle3}>
                    <img src={Img3} className="d-block w-100 h-100" alt="" />
                  </div>
                </div>
              </div>
          </div>
           <div className="carousel-item " style={myStyle2}>
              <div className="row h-100 align-items-center">
                <div className="col-md-6 d-flex align-items-center h-100">
                  <div className="carousel-content">
                    {/* <div className="sub-content grey content-font">Powerful Sports Theme</div> */}
                      <h2 className="text-white text-uppercase heading mb-0">Lowest Prices Best Quality Shopping</h2>
                      <p className="grey fs-5 content-font my-4">There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for.</p>
                      <div className="position-relative">
                        <a className="common-btn text-uppercase read-more bg-white text-black text-decoration-none fw-bold inline-block" href="#">READ MORE</a>
                        <a className="common-btn text-uppercase bg-black text-white  text-decoration-none fw-bold inline-block border ms-3" href="#">
                        CONTACT US</a>
                    </div>
                  </div>
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " style={myStyle2}>
            <div className="row h-100 align-items-center">
              <div className="col-md-6 d-flex align-items-center h-100">
                <div className="carousel-content">
                  {/* <div className="sub-content grey content-font">Powerful Sports Theme</div> */}
                  <h2 className="text-white text-uppercase heading mb-0">
                    Lowest Prices Best Quality Shopping
                  </h2>
                  <p className="grey fs-5 content-font my-4">
                    There are many benefits of shopping online. You can take
                    your time and look at different options to find exactly what
                    you want. It's easy to compare prices online and find
                    exactly what you are looking for.
                  </p>
                  <div className="position-relative">
                    <a
                      className="common-btn text-uppercase read-more bg-white text-black text-decoration-none fw-bold inline-block"
                      href="#"
                    >
                      READ MORE
                    </a>
                    <a
                      className="common-btn text-uppercase bg-black text-white  text-decoration-none fw-bold inline-block border ms-3"
                      href="#"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slide-2-bg">
                  <img src={Img6} className="d-block ps-5" alt="" />
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
=======
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button>
>>>>>>> 842da96e3974ef30bc88b1c4f1509fccac121768
      </div>
    </>
  );
};

export default Slider;
