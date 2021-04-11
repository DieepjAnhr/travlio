import React from 'react';
import { Row, Col, Rate } from 'antd';

const PopularItem = (props) => {
    const prieceSale = <div className="popular-sale">${props.priece - props.priece * props.saleRate}</div>;
    const rateSale = <div className="item-sale">{props.saleRate}% Off</div>
    return (
        <div className="popular-item">
            <div className="img-tran">
                <img src={props.imgHref} alt={"top " + props.top} />
            </div>
            <div className="infor-popular-item">
                <Row>
                    <Col span="16">
                        <div><Rate disabled defaultValue={props.star} style={{fontSize: "15px", paddingRight: "15px"}} />{props.star}</div>
                        <div className="popular-name">{props.name}</div>
                        <div className="popular-address">{props.address}</div>
                    </Col>
                    <Col span="8">
                        <div style={{textAlign: "right", paddingTop: "20px"}}>
                            <del className="popular-priece">${props.priece}</del>
                            {prieceSale}
                        </div>
                    </Col>
                </Row>
                {rateSale}
            </div>
        </div>
    );
}

export default PopularItem;