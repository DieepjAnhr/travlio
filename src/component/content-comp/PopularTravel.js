import React from 'react';
import PopularItems from './PopularItems';

const PopularTravel = () => {
    return (
        <div className="popular">
            <div className="popular-title">
                <div>Popular Travel Packages</div>
                <h2>Top Cities for Travel</h2>
            </div>
            <div className="popular-items">
                <PopularItems />
            </div>
        </div>
    );
};

export default PopularTravel;