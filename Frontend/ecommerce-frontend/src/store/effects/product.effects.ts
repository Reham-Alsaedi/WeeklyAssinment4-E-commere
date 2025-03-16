import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Products } from '../../app/products.service';
import * as productActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
            map((products) => productActions.loadProductsSuccess({ products })),
          catchError((error) => of(productActions.loadProductsFailure({ error: error.message })))
      
    )
  )));

  constructor(
    private actions$: Actions,
    private productService: Products
  ) {}
}
