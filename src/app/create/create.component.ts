import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BlogItem } from '../shared/types/product-item';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  product = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]), // Có thể thêm Validators.min(0) nếu muốn
  });

  get name() {
    return this.product.get('name');
  }

  get price() {
    return this.product.get('price');
  }

  constructor(private blogService: BlogService, private router: Router) {}

  handleAddClick() {
    // 1. Kiểm tra Form có hợp lệ không trước khi gửi
    if (this.product.invalid) {
      this.product.markAllAsTouched(); // Hiển thị lỗi đỏ ngay lập tức nếu người dùng chưa nhập gì mà đã bấm nút
      return;
    }

    const blogItem: BlogItem = {
      // id: Math.random(), // Thường server sẽ tự tạo ID, nên bỏ dòng này hoặc để null
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'quynh',
    } as any; // 'as any' để tránh lỗi thiếu trường ID nếu type BlogItem bắt buộc

    // 2. Sửa lại cách hứng dữ liệu trả về
    this.blogService.postBlog(blogItem).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);

        // Kiểm tra linh hoạt: API có thể trả về { data: ... } hoặc trả về trực tiếp object
        const createdItem = response.data || response;

        if (createdItem && (createdItem.id || createdItem.title)) {
          alert('Thêm mới thành công!');
          this.router.navigate(['/']); // Quay về trang chủ
        }
      },
      error: (err) => {
        console.error('Lỗi thêm mới:', err);
        alert('Có lỗi xảy ra, vui lòng thử lại.');
      },
    });
  }
}
