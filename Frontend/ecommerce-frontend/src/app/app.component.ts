import { Component , OnInit} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [RouterOutlet,CommonModule, ProductListComponent], // Import any necessary components
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-app'
}

