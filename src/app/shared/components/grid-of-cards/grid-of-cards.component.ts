import { Component, inject, Input } from '@angular/core';
import {
  Breakpoints,
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {
  TitleDescriptionAsyncModel,
  TitleDescriptionModel,
} from '../models/title-description.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-of-cards',
  templateUrl: './grid-of-cards.component.html',
  styleUrls: ['./grid-of-cards.component.scss'],
})
export class GridOfCardsComponent {
  private breakpointObserver = inject(BreakpointObserver);
  @Input('cards') cards: TitleDescriptionModel[] = [];
  columns: Observable<number>;
  cardsAsync: Observable<TitleDescriptionAsyncModel[]>;

  ngOnInit() {
    this.columns = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
      ])
      .pipe(
        map((x) => {
          if (x.breakpoints[Breakpoints.XSmall]) return 1;
          if (x.breakpoints[Breakpoints.Small]) return 2;
          if (x.breakpoints[Breakpoints.Medium]) return 2;
          if (x.breakpoints[Breakpoints.Large]) return 3;
          return 4;
        })
      );
  }
}
