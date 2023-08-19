import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type SideListLink = { route: string; text: string; isActive: boolean };

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss'],
})
export class SideListComponent {
  links = [
    { route: '../table', text: 'Table', isActive: true },
    { route: '../colorpicker', text: 'Color picker', isActive: true },
  ];
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((x) => {
      const sn = x['sectionName'];
      this.links.forEach((x) => {
        x.isActive = x.text === sn;
      });
    });
  }
}
