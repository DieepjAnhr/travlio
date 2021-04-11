import React from 'react';
import './css/App.scss';
import 'antd/dist/antd.css';
import HeaderMenu from './component/header-comp/Header';
import Content from './component/content-comp/Content';

function App() {
    return (
        <div>
            <HeaderMenu />
            <Content />
        </div>
    );
}

export default App;
