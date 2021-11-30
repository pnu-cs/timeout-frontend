import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './styles.css';

import SwiperCore, {
  Mousewheel, Autoplay, Pagination,
} from 'swiper';

import { Product } from '../../redux/product/types';

SwiperCore.use([Mousewheel, Autoplay, Pagination]);

interface SwiperComponentProps {
    items: Product[];
    onBuyPress: any
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ items, onBuyPress }) => {
  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      mousewheel
      className="mySwiper"
      pagination={pagination}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    >
      {items.map((item: Product) => (
        <SwiperSlide>
          <div className="slide-description">
            <h1>{item.name}</h1>
            <h2>
              $
              {item.price}
            </h2>
            <p>
              {item.description}
              <br />
              {item.useForDescription}
              <br />
              <br />
              Brand:&#10240;
              {item.brand}
              <br />
              Model:&#10240;
              {item.model}
              <br />
              Year of issue:&#10240;
              {item.yearOfIssue}
              <br />
              Case thickness:&#10240;
              {item.housingThickness}
              <br />
              Housing material:&#10240;
              {item.housingMaterial}
              <br />
              Dial color:&#10240;
              {item.dialColor}
              <br />
              Movement:&#10240;
              {item.clockWork}
              <br />
              Material:&#10240;
              {item.strapMaterial}
              <br />
              <br />
              Strap width:&#10240;
              {item.strapLength}
              <br />
              Strap:&#10240;
              {item.strapMaterial}
              <br />
              Strap colour:&#10240;
              {item.strapColor}
              <br />
              <br />
              Water resistant:&#10240;
              {item.waterResistance}
            </p>
            <button className="buy-btn" type="button">Buy</button>
          </div>
          <img src={item.photo} alt={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
