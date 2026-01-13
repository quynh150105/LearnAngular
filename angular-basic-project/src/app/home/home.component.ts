import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../shared/pipes/CurrencyPipe';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductItem } from '../shared/types/product-item';
import { ProductItemComponent } from '../shared/product-item/product-item.component';
import { BlogService } from '../../service/BlogService';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, currencyPipe, CommonModule, NgIf, RouterLink, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  products: ProductItem[] = [
    {
      id: 1,
      name: 'nib anut',
      price: 3000,
      image: '/assets/images/football.png',
    },
    {
      id: 2,
      name: 'nike',
      price: 400000,
      image: '/assets/images/football.png',
    },
    {
      id: 3,
      name: 'search',
      price: 800000,
      image: '/assets/images/football.png',
    },
  ];

  isVisible = true;

  handleDelete = (id: number) => {
    this.blogService.deleteBlog(id).subscribe(({ data }: any) => {
      if (data == 1) {
        this.products = this.products.filter((item) => item.id !== id);
      }
    });
  };

  getBlogApi: Subscription;

  constructor(private blogService: BlogService) {
    console.log('initial component');
    this.getBlogApi = new Subscription();
  }

  // lam viec voi api
  ngOnInit(): void {
    this.getBlogApi = this.blogService
      .getBlogs()
      .pipe(
        map(
          ({ data }) =>
            data.map((item: any) => ({
              ...item,
              name: item.title,
              price: Number(item.body),
              image: '/assets/images/football.png',
            }))
          // .filter((products) => products.price > 300000)
        )
      )
      .subscribe((res) => {
        this.products = res;
      });
  }

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribe');
    }
  }
}
