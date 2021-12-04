import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClockLoader from 'react-spinners/ClockLoader';
import SwiperComponent from '../../components/Swiper';
import { selectIsProductsLoading, selectProducts } from '../../redux/product/selectors';
import { addProductToOrder } from '../../redux/orders/actions';
import { selectProductsInCart } from '../../redux/orders/selectors';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsProductsLoading);
  const productsInCart = useSelector(selectProductsInCart);
  const onBuyPress: any = (product: any) => dispatch(
    addProductToOrder([...productsInCart, product]),
  );

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

  return <SwiperComponent items={products} onBuyPress={onBuyPress} />;
};

export default HomePage;
