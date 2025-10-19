import apart_1 from "../images/apart_1.jpg";
import apart_2 from "../images/apart_2.jpg";
import apart_3 from "../images/apart_3.jpg";

import "../style/Apart.css";

const Apart = () => {
    return (
        <div className="Apart">
            <section className="section">
                <div className="container">
                    <div className="col-md-12 text-center pt-4 pb-5">
                        <h6 style={{ color: `#95c2d6` }}>
                            START THE SEARCH
                        </h6>
                        <h2 className="mb-3 display-6" style={{ color: `#31476c`, fontFamily: `serif` }}>
                            LUXURY APARTMENTS
                        </h2>
                        <h5 className="mb-5" style={{ color: `#233045` }}>
                            Known for expert market insights, sharp negotiation skills, and a <br /> commitment to excellence, he ensures every client finds a residence that<br /> matches their lifestyle and investment goals.
                        </h5>
                    </div>
                    <div class="row g-4 pt-3">

                        <div class="col-md-4">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_1} class="card-img-top" alt="1 Brooklyn Bridge Park"/>
                                    <div class="card-body text-left" >
                                        <h5 class="card-title">1 Brooklyn Bridge Park</h5>
                                        <div class="property-location">Brooklyn Heights</div>
                                        <p class="card-text">
                                            A luxury condo complex with stunning waterfront views of Manhattan.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_2} class="card-img-top" alt="9 Prospect Park West"/>
                                    <div class="card-body">
                                        <h5 class="card-title">9 Prospect Park West</h5>
                                        <div class="property-location">Park Slope</div>
                                        <p class="card-text">
                                            One of the most prestigious residential addresses, overlooking Prospect Park.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_3} class="card-img-top" alt="360 Furman Street"/>
                                    <div class="card-body">
                                        <h5 class="card-title">360 Furman Street</h5>
                                        <div class="property-location">Brooklyn Heights</div>
                                        <p class="card-text">
                                            The standout address in Brooklyn Bridge Park, home to multimillion-dollar condos.
                                        </p>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div class="row g-4 pt-5">

                        <div class="col-md-4">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_1} class="card-img-top" alt="1 Brooklyn Bridge Park"/>
                                    <div class="card-body text-left" >
                                        <h5 class="card-title">1 Brooklyn Bridge Park</h5>
                                        <div class="property-location">Brooklyn Heights</div>
                                        <p class="card-text">
                                            A luxury condo complex with stunning waterfront views of Manhattan.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_2} class="card-img-top" alt="9 Prospect Park West"/>
                                    <div class="card-body">
                                        <h5 class="card-title">9 Prospect Park West</h5>
                                        <div class="property-location">Park Slope</div>
                                        <p class="card-text">
                                            One of the most prestigious residential addresses, overlooking Prospect Park.
                                        </p>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4 pb-5">
                            <div class="card property-card border-0 shadow-sm">
                                <img src={apart_3} class="card-img-top" alt="360 Furman Street"/>
                                    <div class="card-body">
                                        <h5 class="card-title">360 Furman Street</h5>
                                        <div class="property-location">Brooklyn Heights</div>
                                        <p class="card-text">
                                            The standout address in Brooklyn Bridge Park, home to multimillion-dollar condos.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div className='col-md-12 mb-5 mt-5' style={{ height: `0.10rem`, width: `100%`, background: `#31476c` }}></div>
        </div>
    );
}

export default Apart;