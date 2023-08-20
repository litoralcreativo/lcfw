import { Component, Input } from '@angular/core';
import { TitleDescriptionModel } from '../models/title-description.model';

@Component({
  selector: 'app-title-description-card',
  templateUrl: './title-description-card.component.html',
  styleUrls: ['./title-description-card.component.scss'],
})
export class TitleDescriptionCardComponent {
  @Input('content') content: TitleDescriptionModel;
}
