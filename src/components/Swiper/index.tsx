import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './styles.css';

import SwiperCore, {
  Mousewheel, Autoplay, Pagination, Navigation,
} from 'swiper';

import { Product } from '../../redux/product/types';

SwiperCore.use([Mousewheel, Autoplay, Pagination, Navigation]);

interface SwiperComponentProps {
    items: Product[];
    onBuyPress: any
}

export const watchInformation = (item: Product) => (
  <>
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
  </>
);

const SwiperComponent: React.FC<SwiperComponentProps> = ({ items, onBuyPress }) => {
  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      className="mySwiper"
      pagination={pagination}
      loop
    >
      {items.map((item: Product) => (
        <SwiperSlide>
          <div className="slide-description">
            {watchInformation(item)}
            <button
              className="buy-btn"
              type="button"
              onClick={() => onBuyPress(item.id)}
            >
              Add To Cart
            </button>
          </div>
          <img src={item.photo} alt={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
