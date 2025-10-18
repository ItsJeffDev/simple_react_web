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
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md 12 mb-5 text- mt-5 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vel ipsam eligendi tenetur ab perferendis, cupiditate repellendus dolorem quia quasi fuga culpa aperiam vero? Hic modi quaerat consectetur distinctio quam?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;