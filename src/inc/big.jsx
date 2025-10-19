import React from 'react';
import "../style/Big.css";

const Big = () => {
    return ( 
        <div className="Big">
            <section className="section">
                <div className="container-fluid">
                    <div className="col-md-12 text-center">
                        <h1 className='big_text  p-5 m-5 d-flex justify-content-center'>
                            PREMIUM REAL ESTATE IN HISTORIC BROOKLYN
                        </h1>
                    </div>
                </div>
            </section>
            <div className='col-md-12 mb-5' style={{ height: `0.15rem`,width: `100%`, background: `#31476c`}}></div>
        </div>
     );
}
 
export default Big;