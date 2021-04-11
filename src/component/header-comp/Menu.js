import React from 'react';

const Menu = () => {
    return (
        <div className="main-menu">
            <div className="menu-items">
                <div className="menu-item logo">
                    <img src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/themes/travlio/images/logo.png" alt="logo"></img>
                </div>
                <div className="menu-item item-home">
                    Home
                    <div className="home-items">
                        <div className="home-item">Home 1</div>
                        <hr />
                        <div className="home-item">Home 2</div>
                        <hr />
                        <div className="home-item">Home 3</div>
                        <hr />
                        <div className="home-item">Home 4</div>
                    </div>
                </div>
                <div className="menu-item item-tours">
                    Tours
                        <div className="tours-items">
                            <div className="tours-item">List Tours</div>
                            <hr />
                            <div className="tours-item">Seach Tours</div>
                            <hr />
                            <div className="tours-item">Singer Tours</div>
                            <hr />
                            <div className="tours-item">Singer Event</div>
                        </div>
                </div>
                <div className="menu-item">
                    Blog
                </div>
                <div className="menu-item">
                    About
                </div>
                <div className="menu-item">
                    Contact
                </div>
                <div className="menu-item">
                    Error
                </div>
                <div className="menu-item button-signin">
                    Sign in
                </div>
            </div>
        </div>
    );
};

export default Menu;