import React from "react";
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom'; 

const Home = () => {
    return (
        <div>
            <Slider/>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md 12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat non quisquam odio eius reiciendis voluptates fugit explicabo magnam sed similique nemo rem ad, hic reprehenderit adipisci? Reiciendis non facilis fugiat.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow"> Read Me </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;