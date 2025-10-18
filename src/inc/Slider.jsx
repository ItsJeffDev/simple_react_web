import React from 'react';

import slider_1 from '../images/slide_1.png';
import slider_2 from '../images/slide_2.png';
import slider_3 from '../images/slide_3.png';

const Slider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={slider_1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={slider_2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={slider_3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;