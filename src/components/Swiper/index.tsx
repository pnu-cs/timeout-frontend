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
                            <h1>{item.title}</h1>
                            <h2>{item.price}</h2>
                            <p>
                                With classic features such as the slim case, details in rose gold or silver,
                                and our heritage NATO strap in midnight blue, <br/> <br/>
                                Classic Bayswater is an effortless day-to-evening timepiece.
                                <br/> <br/>
                                Case thickness: 6mm <br/>
                                Dial color: Eggshell White <br/>
                                Movement: Japanese Quartz Movement <br/>
                                Material: Double plated stainless steel (316L) <br/>
                                Strap width: 18mm <br/>
                                Adjustable length: (Min - Max) 150-200mm <br/>
                                Strap: NATO Strap <br/>
                                Strap colour: Midnight Blue <br/>
                                Interchangeable straps: Yes <br/>
                                Water resistant: Up to 3 ATM (Rain resistant)</p>
                            <button>buy!</button>
                        </div>
                        <img src={item1} alt="item 1"/>
                    </SwiperSlide>
                ))}

        </Swiper>
    </>;
}

export default SwiperComponent;
