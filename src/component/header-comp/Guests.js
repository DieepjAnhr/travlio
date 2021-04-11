import React, { useState, useEffect } from 'react';

const Guests = (props) => {
    return (
        <div className="guests-items">
            <div className="guests-item">All Destinations</div>
            <hr/>
            <div className="guests-item">Amsterdam</div>
            <hr/>
            <div className="guests-item">London</div>
            <hr/>
            <div className="guests-item">New York</div>
            <hr/>
            <div className="guests-item">Paris</div>
        </div>
    );
};

export default Guests;