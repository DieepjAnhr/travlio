import React from 'react';
import Banner from './Banner';
import Infor from './Infor';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="main-header">
            <Menu />
            <Banner />
            <Infor />
        </div>
    );
}

export default Header;