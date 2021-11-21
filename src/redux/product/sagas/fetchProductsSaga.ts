import {put} from "redux-saga/effects";
import {fetchProductsSucceed} from "../actions";

export default function* fetchProductsSags() {
    yield setTimeout(() => {}, 7000);

    yield put(fetchProductsSucceed([
        {
            title: 'Product 1',
            price: '250$',
            description: 'Classic Bayswater is an effortless day-yo-evening timepiece.',
            useFor: 'For important meetings.',
            brand: 'Brand: Rolex',
            model: 'Daytona',
            yearOfIssue:  1968,
            housingMaterial: 'Housing material: steel',
            strapMaterial:'Strap material: crocodile skin.',
            dialColor: 'Dial color: black',
            strapColor: 'Strap color: white',
            housingThickness: 'Housing thickness: 37 mm',
            strapLength: 'Strap length: 150mm',
            clockWork: 'The watch works: mechanically / from the battery',
            waterResistance: 'Water resistance of the watch: up to 3 atmospheres',
        },
        {
            title: 'Product 2',
            price: '250$',
            description: 'Classic Bayswater is an effortless day-yo-evening timepiece.',
            useFor: 'For important meetings.',
            brand: 'Brand: Rolex',
            model: 'Daytona',
            yearOfIssue:  1968,
            housingMaterial: 'Housing material: steel',
            strapMaterial:'Strap material: crocodile skin.',
            dialColor: 'Dial color: black',
            strapColor: 'Strap color: white',
            housingThickness: 'Housing thickness: 37 mm',
            strapLength: 'Strap length: 150mm',
            clockWork: 'The watch works: mechanically / from the battery',
            waterResistance: 'Water resistance of the watch: up to 3 atmospheres',
        }
    ]));
}
