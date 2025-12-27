import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/types/product-item';
import { BlogService } from '../../service/BlogService';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  id = '';

  productItem: ProductItem = {
    id: 0,
    image: '',
    name: '',
    price: 0,
  };

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id).subscribe(({ data }: any) => {
      this.productItem.id = data.id;
      this.productItem.image = '/assets/images/football.png';
      this.productItem.name = data.title;
      this.productItem.price = data.body;
    });
  }
}
