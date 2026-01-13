import { Component, OnInit } from '@angular/core';
import { Child } from '../child/child-component';
import { NgIf } from '../../../node_modules/@angular/common/types/_common_module-chunk';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: 'parent-component.html',
  styleUrl: 'parent-component.css',
  imports: [Child, RouterLink],
})
export class Parent implements OnInit {
  userName: string = 'quynh';
  isDestroy = false;
  count: number = 0;
  updateUser() {
    this.userName = 'ronaldo';
    this.count++;
  }

  ngOnInit(): void {
    console.log('ngInit form the parent Component');
  }

  destroy() {
    this.isDestroy = true;
  }
}
