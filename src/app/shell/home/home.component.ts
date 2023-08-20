import { Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { TitleDescriptionModel } from 'src/app/shared/components/models/title-description.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards: TitleDescriptionModel[] = [
    {
      title: 'Table',
      description:
        'Organizes data in rows and columns to display structured information in a readable and efficient manner.',
    },
    {
      title: 'Color picker',
      description:
        'A tool that enables users to choose colors through an intuitive visual interface.',
    },
  ];
}
