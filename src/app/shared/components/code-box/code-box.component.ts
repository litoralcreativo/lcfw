import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent implements OnInit {
  @Input() title: string;
  codeShowed: boolean = false;
  @Input() htmlCode: string;
  @Input() tsCode: string;
  @Input() cssCode: string;

  constructor() {
    console.log(this.tsCode);
  }

  ngOnInit() {}

  toogleCodeShowed() {
    this.codeShowed = !this.codeShowed;
  }
}
