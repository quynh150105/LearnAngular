import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiGroup,
  TuiIcon,
  TuiLink,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import { TuiBadge, TuiBlock, TuiBreadcrumbs, TuiFade, TuiTabs } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiNavigation } from '@taiga-ui/layout';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'NavigationComponent',
  exportAs: 'NavigationComponent',
  imports: [
    FormsModule,
    NgIf,
    TuiAppearance,
    TuiBadge,
    TuiBlock,
    TuiBreadcrumbs,
    TuiButton,
    TuiCardLarge,
    TuiFade,
    TuiGroup,
    TuiHeader,
    TuiIcon,
    TuiLink,
    TuiNavigation,
    TuiRepeatTimes,
    TuiTabs,
    TuiTextfield,
    TuiTitle,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected current = 'basic';
}
