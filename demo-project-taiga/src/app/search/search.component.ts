import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY_QUERY, TuiValidator } from '@taiga-ui/cdk';
import { TuiButton, TuiTextfield, TuiError } from '@taiga-ui/core';
import { TuiItemsWithMore } from '@taiga-ui/kit';
import { TuiSearch } from '@taiga-ui/layout';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  exportAs: 'SearchDemo',
  selector: 'SearchComponent',
  imports: [
    JsonPipe,
    NgForOf,
    ReactiveFormsModule,
    TuiButton,
    TuiItemsWithMore,
    TuiSearch,
    TuiTextfield,
    TuiValidator,
    TuiError,
    NgIf,
  ],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDemo implements OnInit {
  protected readonly filters = new FormArray(Array.from({ length: 5 }, () => new FormControl()));
  protected readonly form = new FormGroup({ filters: this.filters });
  protected readonly controls = EMPTY_QUERY;
  protected readonly validator = Validators.email;
  username = '';

  ngOnInit(): void {
    this.filters.at(0).valueChanges.subscribe((value) => {
      this.username = value;
      console.log('form value1: ', value);
    });
    this.filters.at(1).setValidators(Validators.email);
    this.filters.at(1).updateValueAndValidity();
  }

  handleClick() {
    console.log(this.filters.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const body: Object = {
      username: this.filters.at(0).value,
      email: this.filters.at(1).value,
    };
    console.log(body);
  }
}
