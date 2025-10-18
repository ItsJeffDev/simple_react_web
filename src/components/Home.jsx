import React from "react";
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import "../App.css";

const Home = () => {
    return (
        <div>
            <Slider/>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading mt-5">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p className="mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat non quisquam odio eius reiciendis voluptates fugit explicabo magnam sed similique nemo rem ad, hic reprehenderit adipisci? Reiciendis non facilis fugiat.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow"> Read Me </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 text- mt-5 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <div className="col-md-4">
                                <h3>Hello</h3>
                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magnam eveniet praesentium rem necessitatibus iste similique molestiae magni tenetur, quis harum aut labore enim velit illum natus alias explicabo obcaecati!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;