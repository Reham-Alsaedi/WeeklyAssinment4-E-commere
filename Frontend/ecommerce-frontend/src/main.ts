import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store'; 
import { productReducer } from './store/reducer/product.reducer'; 
import { AppComponent } from './app/app.component'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ product: productReducer }),  // Ensure this is correct
  ]
})
  .catch((err) => console.error(err));
