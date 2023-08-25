import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from './code-box.model';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent implements OnInit {
  codeShowed: boolean = false;
  @Input() codeModels: CodeModel[] = [];

  constructor() {}
  ngOnInit() {}

  toogleCodeShowed() {
    this.codeShowed = !this.codeShowed;
  }
}
