import React, {useState } from 'react'; 
import LocationRent from './LocationRent';

const Banner = () => {
    const [loca, setLoca] = useState(false);
    const showLoca = loca? <LocationRent />: "";

    return (
        <div className="main-banner">
            <div className="banner-content">
                <h1>Ready to start your exciting journey.</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                <div className="seach">
                    <div className="location-rent seach-item" onClick={() => {setLoca(!loca)}}>      
                        All Destinations          
                        {showLoca}
                    </div>
                    <div className="date-from seach-item">Date from</div>
                    <div className="date-to seach-item">Date to</div>
                    <div className="guests seach-item">Guests</div>
                    <div className="seach-button seach-item">SEACH</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;