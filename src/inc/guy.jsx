import React from 'react';
import Guy_img from "../images/nath.jpg";
import "../style/Guy.css";

const Guy = () => {
    return (
        <div className="Guy">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={Guy_img} alt="Nath" className="img-fluid" />
                                </div>
                                <div className="col-md-6 pt-4">
                                    <h3 className='text-center display-6 p-3' style={{ fontFamily: `serif`, color: `#6767e0ff` }}>NATHANIEL BOWEN</h3>
                                    <h5 className='h5_text  text-left ms-5' style={{ lineHeight: `1.8rem`, color: `#31476c`, }} >
                                        Nathaniel is a premier real estate expert specializing in luxury apartments in New York City. With a keen eye for high-end properties and an in-depth understanding of the city's most coveted neighborhoods, Nathaniel delivers unparalleled service to discerning buyers, sellers, and investors. Known for expert market insights, sharp negotiation skills, and a commitment to excellence, he ensures every client finds a residence that matches their lifestyle and investment goals.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 mb-5 mt-5' style={{ height: `0.10rem`, width: `100%`, background: `#31476c` }}></div>
            </section>

        </div>
    );
}

export default Guy;