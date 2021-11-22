import React from 'react';
import { useSelector } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import SwiperComponent from '../../components/Swiper';
import { selectIsProductsLoading, selectProducts } from '../../redux/product/selectors';

const HomePage: React.FC = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsProductsLoading);

  if (isLoading) {
    return (
      <div style={{
        height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <ClockLoader color="gray" />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div style={{
        height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkgray',
      }}
      >
        Error loading products...
      </div>
    );
  }

  return <SwiperComponent items={products} />;
};

export default HomePage;
