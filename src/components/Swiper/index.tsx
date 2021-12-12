import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './styles.css';

import SwiperCore, {
  Mousewheel, Autoplay, Pagination, Navigation,
} from 'swiper';

import { Product } from '../../redux/product/types';
import { StylizedTextField } from '../../containers/stylized_components';

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
      {`Brand: ${item.brand}`}
      <br />
      {`Model: ${item.model}`}
      <br />
      {`Year of issue: ${item.yearOfIssue}`}
      <br />
      {`Case thickness: ${item.housingThickness}`}
      <br />
      {`Housing material: ${item.housingMaterial}`}
      <br />
      {`Dial color: ${item.dialColor}`}
      <br />
      {`Movement: ${item.clockWork}`}
      <br />
      {`Material: ${item.strapMaterial}`}
      <br />
      <br />
      {`Strap width: ${item.strapLength}`}
      <br />
      {`Strap: ${item.strapMaterial}`}
      <br />
      {`Strap colour: ${item.strapColor}`}
      <br />
      <br />
      {`Water resistant: ${item.waterResistance}`}
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

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Swiper
      className="mySwiper"
      pagination={pagination}
      autoplay={false}
      allowTouchMove={false}
      mousewheel
      loop
    >
      {items.map((item: Product) => (
        <SwiperSlide>
          <div className="slide-description">
            {watchInformation(item)}
            <StylizedTextField
              id="outlined-number"
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
              onBlur={() => {
                if (quantity < 1) {
                  setQuantity(1);
                }
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: 'white' },
              }}
              size="medium"
              margin="normal"
              defaultValue={1}
              inputProps={{
                min: 1,
                max: 99,
                maxLength: 2,
                style: { color: 'white', width: 122 },
              }}
            />
            <br />
            <button
              className="buy-btn"
              type="button"
              onClick={() => onBuyPress({ productId: item.id, quantity })}
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
