import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import './styles.css';

import item1 from '../../assets/item1.png';

import SwiperCore, {
    Mousewheel, Autoplay, Pagination
} from 'swiper';
import {Product} from "../../redux/product/types";

SwiperCore.use([ Mousewheel, Autoplay, Pagination]);

interface SwiperComponentProps {
    items: Product[];
}

export const SwiperComponent: React.FC<SwiperComponentProps> = ({ items }) => {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index: number, className: string) {
            return '<span class="' + className + '"></span>';
        }
    }

    return <>
        <Swiper
            mousewheel={true}
            className="mySwiper"
            pagination={pagination}
            loop={true}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": true
            }}>
            {items.map((item: Product) => (
                <SwiperSlide>
                    <div className="slide-description">
                        <h1>{item.name}</h1>
                        <h2>${item.price}</h2>
                        <p>{item.description}
                            <br/> <br/>
                            Case thickness: {item.housingThickness} <br/>
                            Dial color: {item.dialColor} <br/>
                            Movement: {item.clockWork}<br/>
                            Material: {item.strapMaterial} <br/><br/>
                            Strap width: {item.strapLength} <br/>
                            Adjustable length: (Min - Max) 150-200mm <br/>
                            Strap: {item.strapMaterial} <br/>
                            Strap colour: {item.strapColor} <br/><br/>
                            Interchangeable straps: Yes <br/>
                            Water resistant: Up to 3 ATM (Rain resistant)</p>
                        <button className="buy-btn">Buy</button>
                    </div>
                    <img src={item1} alt="item 1"/>
                </SwiperSlide>
            ))}
        </Swiper>
    </>;
}

export default SwiperComponent;