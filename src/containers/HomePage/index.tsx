import React from "react";
import {useSelector} from "react-redux";
import SwiperComponent from "../../components/Swiper";

import {selectIsProductsLoading, selectProducts} from "../../redux/product/selectors";


export const HomePage = () => {
    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectIsProductsLoading);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return  <SwiperComponent items={products} />
}

export default HomePage;
