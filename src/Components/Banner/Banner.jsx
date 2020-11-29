import React from 'react';
import Header from '../Header/Header';
import TinySlider from '../TinySlider/TinySlider';
import './Banner.css'


const Banner = () => {
    return (
        <div>


            <div className="banner-area">
                <div className="banner-overlay pb-5">
                    <Header />
                    <TinySlider></TinySlider>
                </div>
            </div>
        </div>
    );
};

export default Banner;