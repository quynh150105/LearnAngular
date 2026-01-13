import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetService } from '../service/getService';
import { interval, Subscription } from 'rxjs';
import { OnInit } from '@angular/core';
import { log } from 'node:console';
import { userResponse } from '../response/userResponse';
import { pageResponse } from '../response/pageResponse';

@Component({
  selector: 'helloworld-component',
  standalone: true,
  templateUrl: 'helloworld-component.html',
  styleUrl: 'helloworld-component.css',
  imports: [RouterLink],
})
export class HelloWorld implements OnInit {
  getServiceApi: Subscription;
  constructor(private getService: GetService) {
    this.getServiceApi = new Subscription();
  }

  list: userResponse[] = [];

  body = {
    username: '',
    email: '',
    enabled: '',
    pageNo: 0,
    pageSize: 10,
  };

  pageNo = 0;
  pageSize = 10;
  totalPage = 0;
  totalElement = 0;
  count: number = 0;

  ngOnInit(): void {
    console.log('list data: ');
    this.getService.getAll(this.body).subscribe({
      next: (res) => {
        this.list = res.data.content;
        console.log(this.list);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
