import React from "react";
import {useSelector} from "react-redux";
import SwiperComponent from "../../components/Swiper";
import {ClockLoader} from 'react-spinners';
import {selectIsProductsLoading, selectProducts} from "../../redux/product/selectors";


export const HomePage = () => {
    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectIsProductsLoading);

    if (isLoading) {
        return <div style={{height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ClockLoader color={'gray'}/></div>
    }

    if(!products || products.length === 0) {
        return <div style={{height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkgray'}}>Error loading products...</div>
    }

    return  <SwiperComponent items={products} />
}

export default HomePage;
