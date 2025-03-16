import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Adjust path
import { ProductState } from '../../store/reducer/product.reducer'; // Adjust path
import { CommonModule } from '@angular/common';
import { selectProducts ,selectLoading, selectError} from '../../store/selectors/product.selectors'; // Adjust path
import { loadProducts } from '../../store/actions/product.actions'; // Adjust path
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private router: Router) {
    this.products$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}

