import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: 'child-component.html',
  styleUrl: 'child-component.css',
  imports: [],
})
export class Child implements OnChanges, OnInit, DoCheck {
  @Input() userName: string = '';

  ngOnInit(): void {
    console.log('this is init from Child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges triggered', changes);

    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'ronaldo') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue();
      }
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }
}
