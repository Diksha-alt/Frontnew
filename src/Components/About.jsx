import { React } from "react";
import AboutImg from "../assets/about-img.webp";

const About = () => {
  return (
    <>
      <section className="About-sec mg-top">
        <div className="container">
          <div className="row m-0 align-items-center">
            <div className="col-md-6">
              <img src={AboutImg} className="img-fluid w-100" />
            </div>
            <div className="col-md-6">
              <h2>Andrew Salazar</h2>
              {/* <div className="mb-4">
							 Cuba | Eagles | Eagles, Giants <span className="grey">| Primary League | 2019, 2020 | 5 ft 10 in | 220 lb
							</span>
						</div> */}
              <h4 className="text-uppercase">Short Biography</h4>
              <p className="grey fs-6 content-font mt-2">
                Lorem ipsum dolor sit amet, vis an altera torquatos, vel assum
                nostrum eleifend at. Choro posidonium vix et, ei mei iisque
                antiopam comprehensam. Putent repudiandae ei sed, eu wisi
                accusamus sadipscing mea. Cu omnis nonumes mei. Est ex exerci
                numquam, usu esse oporteat legendos ea. Nec ea partiendo
                appellantur. Efficiendi temporibus no duo, at est vulputate
                abhorreant. In populo corrumpit eum.{" "}
              </p>
              <a
                className="common-btn text-uppercase read-more bg-transparent text-black text-decoration-none fw-bold inline-block border"
                href="#"
              >
                VIEW PROFILE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
