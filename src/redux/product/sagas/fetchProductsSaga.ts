import {put} from "redux-saga/effects";
import {fetchProductsFailed, fetchProductsSucceed} from "../actions";
import {push} from "react-router-redux";

const GET_PRODUCTS_PATH = 'http://localhost:8080/products';

export default function* fetchProductsSags() {
    let response: object;

    try {
        yield fetch(GET_PRODUCTS_PATH, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => response = data)
            .catch(e => {
                throw new Error('FETCH PRODUCTS ERROR');
            });

        // @ts-ignore
        yield put(fetchProductsSucceed(response));
        yield put(push('/'));
    } catch (error: any) {
        console.error('FETCH PRODUCTS ERROR', error?.message);
        yield put(fetchProductsFailed(error));
    }

    // yield put(fetchProductsSucceed([
    //     {
    //         title: 'Product 1',
    //         price: '250$',
    //         description: 'Classic Bayswater is an effortless day-yo-evening timepiece.',
    //         useFor: 'For important meetings.',
    //         brand: 'Brand: Rolex',
    //         model: 'Daytona',
    //         yearOfIssue:  1968,
    //         housingMaterial: 'Housing material: steel',
    //         strapMaterial:'Strap material: crocodile skin.',
    //         dialColor: 'Dial color: black',
    //         strapColor: 'Strap color: white',
    //         housingThickness: 'Housing thickness: 37 mm',
    //         strapLength: 'Strap length: 150mm',
    //         clockWork: 'The watch works: mechanically / from the battery',
    //         waterResistance: 'Water resistance of the watch: up to 3 atmospheres',
    //     },
    //     {
    //         title: 'Product 2',
    //         price: '250$',
    //         description: 'Classic Bayswater is an effortless day-yo-evening timepiece.',
    //         useFor: 'For important meetings.',
    //         brand: 'Brand: Rolex',
    //         model: 'Daytona',
    //         yearOfIssue:  1968,
    //         housingMaterial: 'Housing material: steel',
    //         strapMaterial:'Strap material: crocodile skin.',
    //         dialColor: 'Dial color: black',
    //         strapColor: 'Strap color: white',
    //         housingThickness: 'Housing thickness: 37 mm',
    //         strapLength: 'Strap length: 150mm',
    //         clockWork: 'The watch works: mechanically / from the battery',
    //         waterResistance: 'Water resistance of the watch: up to 3 atmospheres',
    //     }
    // ]));
}
