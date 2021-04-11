import React from 'react';
import { SmileTwoTone } from '@ant-design/icons';

const Infor = () => {
    return (
        <div className="infor-items">
            <div className="local infor-item">
                <div className="icon items">Icon</div>
                <div className="items">
                    <h3 className="title-item">
                        1000+ Local Tours   
                    </h3>
                    <div className="desc-item">
                        Morbi semper fames lobortis ac hac
                    </div>
                </div>
            </div>
            <div className="local infor-item">
                <div className="icon items">Icon</div>
                <div className="items">
                    <h3 className="title-item">
                        Winter Destinations  
                    </h3>
                    <div className="desc-item">
                        Morbi semper fames lobortis ac hac
                    </div>
                </div>
            </div>
            <div className="local infor-item">
                <div className="icon items"><SmileTwoTone twoToneColor="orange" /></div>
                <div className="items">
                    <h3 className="title-item">
                        98% Happy Travelers
                    </h3>
                    <div className="desc-item">
                        Morbi semper fames lobortis ac hac
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infor;