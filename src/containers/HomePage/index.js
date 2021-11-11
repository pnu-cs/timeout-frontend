import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import './styles.css';

import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import item4 from '../../assets/item4.png';

import SwiperCore, {
    Mousewheel, Autoplay, Pagination
} from 'swiper';

SwiperCore.use([ Mousewheel, Autoplay, Pagination]);

export const HomePage = () => {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    }

    return <>
        <Swiper
            mousewheel={true}
            className="mySwiper"
            pagination={pagination}z
            loop={true}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": true
            }}>
            <SwiperSlide>
                <div className="slide-description">
                    <h1>Red sky</h1>
                    <h2>$250</h2>
                    <p>
                        With classic features such as the slim case, details in rose gold or silver,
                        and our heritage NATO strap in midnight blue, <br/> <br/>
                        Classic Bayswater is an effortless day-to-evening timepiece.
                        <br/> <br/>
                        Case thickness:  6mm <br/>
                        Dial color:  Eggshell White <br/>
                        Movement:  Japanese Quartz Movement <br/>
                        Material:  Double plated stainless steel (316L) <br/>
                        Strap width:  18mm <br/>
                        Adjustable length:  (Min - Max) 150-200mm <br/>
                        Strap:  NATO Strap <br/>
                        Strap colour:  Midnight Blue <br/>
                        Interchangeable straps:  Yes <br/>
                        Water resistant:  Up to 3 ATM (Rain resistant)</p>
                </div>
                <img src={item1} alt="item 1"/>
            </SwiperSlide>
            <SwiperSlide >
                <div className="slide-description">
                    <h1>Red sky</h1>
                    <h2>$250</h2>
                    <p>
                        With classic features such as the slim case, details in rose gold or silver,
                        and our heritage NATO strap in midnight blue, <br/> <br/>
                        Classic Bayswater is an effortless day-to-evening timepiece.
                        <br/> <br/>
                        Case thickness:  6mm <br/>
                        Dial color:  Eggshell White <br/>
                        Movement:  Japanese Quartz Movement <br/>
                        Material:  Double plated stainless steel (316L) <br/>
                        Strap width:  18mm <br/>
                        Adjustable length:  (Min - Max) 150-200mm <br/>
                        Strap:  NATO Strap <br/>
                        Strap colour:  Midnight Blue <br/>
                        Interchangeable straps:  Yes <br/>
                        Water resistant:  Up to 3 ATM (Rain resistant)</p>
                </div>
                <img src={item2} alt="item 1"/>
            </SwiperSlide>
            <SwiperSlide >
                <div className="slide-description">
                    <h1>Red sky</h1>
                    <h2>$250</h2>
                    <p>
                        With classic features such as the slim case, details in rose gold or silver,
                        and our heritage NATO strap in midnight blue, <br/> <br/>
                        Classic Bayswater is an effortless day-to-evening timepiece.
                        <br/> <br/>
                        Case thickness:  6mm <br/>
                        Dial color:  Eggshell White <br/>
                        Movement:  Japanese Quartz Movement <br/>
                        Material:  Double plated stainless steel (316L) <br/>
                        Strap width:  18mm <br/>
                        Adjustable length:  (Min - Max) 150-200mm <br/>
                        Strap:  NATO Strap <br/>
                        Strap colour:  Midnight Blue <br/>
                        Interchangeable straps:  Yes <br/>
                        Water resistant:  Up to 3 ATM (Rain resistant)</p>
                </div>
                <img src={item3} alt="item 1"/>
            </SwiperSlide>
            <SwiperSlide >
                <div className="slide-description">
                    <h1>Red sky</h1>
                    <h2>$250</h2>
                    <p>
                        With classic features such as the slim case, details in rose gold or silver,
                        and our heritage NATO strap in midnight blue, <br/> <br/>
                        Classic Bayswater is an effortless day-to-evening timepiece.
                        <br/> <br/>
                        Case thickness:  6mm <br/>
                        Dial color:  Eggshell White <br/>
                        Movement:  Japanese Quartz Movement <br/>
                        Material:  Double plated stainless steel (316L) <br/>
                        Strap width:  18mm <br/>
                        Adjustable length:  (Min - Max) 150-200mm <br/>
                        Strap:  NATO Strap <br/>
                        Strap colour:  Midnight Blue <br/>
                        Interchangeable straps:  Yes <br/>
                        Water resistant:  Up to 3 ATM (Rain resistant)</p>
                </div>
                <img src={item4} alt="item 1"/>
            </SwiperSlide>
        </Swiper>
    </>;
}

export default HomePage;
