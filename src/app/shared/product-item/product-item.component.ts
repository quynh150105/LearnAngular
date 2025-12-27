import { Component, Input, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../../shared/pipes/CurrencyPipe';
import { upperCasePipe } from '../../shared/pipes/upperCasePipe';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../types/product-item';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [FormsModule, currencyPipe, upperCasePipe, CommonModule, NgFor, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnDestroy {
  // gia tri nhan vao tu component cha
  @Input() products: ProductItem[] = [];

  // gia tri truyen cho component cha
  @Output() dataEvent = new EventEmitter<number>();

  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
  };

  // getter

  get totalPrice(): string {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return `Total Price: ${sum}`;
  }

  // cho phep prop hien tai va truoc do
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes['product'].currentValue);
  //   console.log(changes['product'].previousValue);
  // }
  ngOnDestroy(): void {
    console.log('Component is removed');
  }
}
