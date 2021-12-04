import React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderId, selectProductsInCart, selectOrderError } from '../../redux/orders/selectors';
import { selectProducts } from '../../redux/product/selectors';
import { Product } from '../../redux/product/types';
import './styles.css';
import { createOrderInit } from '../../redux/orders/actions';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const productsIds = useSelector(selectProductsInCart);
  const products = useSelector(selectProducts);
  const orderCreated = useSelector(selectOrderId);
  const orderError = useSelector(selectOrderError);

  const productsAddedToCart = products.filter((product: any) => productsIds.includes(product.id));

  const onOrderPress: any = () => {
    dispatch(
      createOrderInit(productsIds),
    );

    if (orderCreated && !orderError) {
      enqueueSnackbar('Thank you for your order!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }

    if (orderError) {
      enqueueSnackbar('Error creating order! Try later', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
  };

  return (
    <section className="container">
      <h1 color="white">{productsAddedToCart.length > 0 ? 'Your cart:' : 'Your cart is empty'}</h1>
      {productsAddedToCart.length > 0 && productsAddedToCart.map((item: Product) => (
        <div className="item">
          <img src={item.photo} alt="selected product" />
          <div className="item-desc">
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

          </div>
        </div>
      ))}
      {productsAddedToCart.length > 0 && (
      <button
        className="order-btn"
        type="button"
        onClick={onOrderPress}
      >
        Order
      </button>
      )}

    </section>
  );
};

export default CartPage;