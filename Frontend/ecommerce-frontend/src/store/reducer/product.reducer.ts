import { createReducer, on } from '@ngrx/store';
import * as productActions from '../actions/product.actions';
//import { loadProductsSuccess } from '../actions/product.actions';
import { Product } from '../../app/models/product.model'; // Adjust path
import { Products } from '../../app/products.service';


export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(productActions.loadProducts, (state) => 
  ({ ...state, 
  loading: true,
  error: null})),
  on(productActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    Products,
    loading: false,
  })),
  on(productActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);





