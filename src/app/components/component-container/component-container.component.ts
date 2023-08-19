import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.scss'],
})
export class ComponentContainerComponent {
  sectionName: string;
  oae: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe((x) => {
      this.sectionName = x['sectionName'];
      this.oae = x['oae'];
    });
  }

  onTabChange(selectedTabChange: MatTabChangeEvent) {
    switch (selectedTabChange.index) {
      case 0:
        this.router.navigate(['overview'], {
          relativeTo: this.route,
        });
        break;
      case 1:
        this.router.navigate(['api'], {
          relativeTo: this.route,
        });
        break;
      case 2:
        this.router.navigate(['examples'], {
          relativeTo: this.route,
        });
        break;
    }
  }
}
