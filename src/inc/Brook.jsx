import "../style/Brook.css";

import brook_1 from "../images/brook_1.jpg";
import brook_2 from "../images/brook_2.jpg";
import brook_3 from "../images/brook_3.jpg";

const Brook = () => {
    return (
        <div className="Brook mt-5 pt-5">
            <section className="section">
                <div className="container">
                    <h1 className="display-3 text-center mb-3" style={{fontFamily: `serif`, color: `#31476c` }}> BROOKLYN EXPERTS </h1>
                    <div className="col-md-12 pb-5 mb-5">
                        <div class="row g-4 pt-5">
                            <div class="col-md-4">
                                <div class="card property-card border-0 shadow-sm">
                                    <img src={brook_1} class="card-img-top" alt="1 Brooklyn Bridge Park" />
                                    <div class="card-body text-left" >
                                        <h5 class="card-title">1 Brooklyn Bridge Park</h5>
                                        <div class="property-location">Brooklyn Heights</div>
                                        <p class="card-text">
                                            A luxury condo complex with stunning waterfront views of Manhattan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="middle-cards col-md-4 mt-5">
                                <div className="card property-card border-0 shadow-sm">
                                    <img src={brook_2} className="card-img-top" alt="9 Prospect Park West" />
                                    <div className="card-body">
                                        <h5 className="card-title">9 Prospect Park West</h5>
                                        <div className="property-location">Park Slope</div>
                                        <p className="card-text">
                                            One of the most prestigious residential addresses, overlooking Prospect Park.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-4 pb-5">
                                <div class="card property-card border-0 shadow-sm">
                                    <img src={brook_3} class="card-img-top" alt="360 Furman Street" />
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
                </div>
            </section>
        </div>
    );
}

export default Brook;