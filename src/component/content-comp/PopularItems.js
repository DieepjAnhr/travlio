import React from 'react';
import { Row, Col } from 'antd';
import PopularItem from './PopularItem';
import popularData from './popularData.json';

const data = popularData;
const PopularItems = () => {
    const printRow = (n, arr) => {
        for(let i = 0 + n; i < 3 + n; i++)
            arr.push(
                <Col span="8">
                    <PopularItem
                        imgHref={data[i].imgHref}
                        top={data[i].top}
                        star={data[i].star}
                        name={data[i].name}
                        address={data[i].address}
                        priece={data[i].priece}
                        saleRate={data[i].saleRate}
                    />
                </Col>
            );
    }
    const print = [];
    printRow(0, print);

    return (
        <div>
            <Row className="items-group">
                {print}
            </Row>
            <Row className="items-group">
                {print}
            </Row>
        </div>
    );
}

export default PopularItems;