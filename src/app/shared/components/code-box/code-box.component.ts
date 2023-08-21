import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent {
  @Input() htmlCode: string;
  @Input() cssCode: string;
  @Input() tsCode: string;
}
