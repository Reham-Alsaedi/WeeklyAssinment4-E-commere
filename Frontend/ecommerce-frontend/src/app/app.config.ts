import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { productReducer } from '../store/reducer/product.reducer'; 
import { ProductEffects } from '../store/effects/product.effects';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient , withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes),
    provideStore({ products: productReducer }),
    provideEffects([ProductEffects]),
    provideHttpClient(withFetch()),
  ],
};

