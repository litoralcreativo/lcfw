import { Component, OnInit } from '@angular/core';
import { CodeModel } from 'src/app/shared/components/code-box/code-box.model';
import {
  html as ex01_html,
  ts as ex01_ts,
  scss as ex01_scss,
  models as ex01_models,
} from './examples/lc-table-ov01/lc-table-ov01.exports';

import {
  html as ex02_html,
  ts as ex02_ts,
  scss as ex02_scss,
  models as ex02_models,
} from './examples/lc-table-ov02/lc-table-ov02.exports';

@Component({
  selector: 'app-lc-table-ov',
  templateUrl: './lc-table-ov.component.html',
  styleUrls: ['./lc-table-ov.component.scss'],
})
export class LcTableOverviewComponent implements OnInit {
  code_examples_1: CodeModel[] = [
    {
      label: 'HTML',
      code: ex01_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex01_ts,
      language: 'typescript',
    },
    {
      label: 'SCSS',
      code: ex01_scss,
      language: 'css',
    },
    {
      label: 'lc-table-ov01.models.ts',
      code: ex01_models,
      language: 'typescript',
    },
  ];

  code_examples_2: CodeModel[] = [
    {
      label: 'HTML',
      code: ex02_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex02_ts,
      language: 'typescript',
    },
    {
      label: 'SCSS',
      code: ex02_scss,
      language: 'css',
    },
    {
      label: 'lc-table-ov01.models.ts',
      code: ex02_models,
      language: 'typescript',
    },
  ];

  ngOnInit() {}
}
