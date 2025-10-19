import React from "react";
import Slider from '../inc/Slider';
import Big from "../inc/big";
import Guy from "../inc/guy";
import Brook from "../inc/Brook";
import Apart from "../inc/Apart";
import {Link} from 'react-router-dom';
import "../App.css";

const Home = () => {
    return (
        <div>
            <Big/>
            <Guy/>
            <Apart/>
            <Brook/>
        </div>
    );
}

export default Home;