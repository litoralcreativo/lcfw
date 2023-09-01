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

import {
  html as ex03_html,
  ts as ex03_ts,
  scss as ex03_scss,
  models as ex03_models,
} from './examples/lc-table-ov03/lc-table-ov03.exports';

import {
  html as ex04_html,
  ts as ex04_ts,
  scss as ex04_scss,
  models as ex04_models,
} from './examples/lc-table-ov04/lc-table-ov04.exports';

import {
  html as ex05_html,
  ts as ex05_ts,
  scss as ex05_scss,
  models as ex05_models,
} from './examples/lc-table-ov05/lc-table-ov05.exports';

import {
  html as ex06_html,
  ts as ex06_ts,
  scss as ex06_scss,
  models as ex06_models,
} from './examples/lc-table-ov06/lc-table-ov06.exports';

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
    /* {
      label: 'SCSS',
      code: ex01_scss,
      language: 'css',
    }, */
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
    /* {
      label: 'SCSS',
      code: ex02_scss,
      language: 'css',
    }, */
    {
      label: 'lc-table-ov02.models.ts',
      code: ex02_models,
      language: 'typescript',
    },
  ];

  code_examples_3: CodeModel[] = [
    {
      label: 'HTML',
      code: ex03_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex03_ts,
      language: 'typescript',
    },
    /* {
      label: 'SCSS',
      code: ex03_scss,
      language: 'css',
    }, */
    {
      label: 'lc-table-ov03.models.ts',
      code: ex03_models,
      language: 'typescript',
    },
  ];

  code_examples_4: CodeModel[] = [
    {
      label: 'HTML',
      code: ex04_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex04_ts,
      language: 'typescript',
    },
    /* {
      label: 'SCSS',
      code: ex04_scss,
      language: 'css',
    }, */
    {
      label: 'lc-table-ov04.models.ts',
      code: ex04_models,
      language: 'typescript',
    },
  ];

  code_examples_5: CodeModel[] = [
    {
      label: 'HTML',
      code: ex05_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex05_ts,
      language: 'typescript',
    },
    {
      label: 'SCSS',
      code: ex05_scss,
      language: 'css',
    },
    {
      label: 'lc-table-ov04.models.ts',
      code: ex05_models,
      language: 'typescript',
    },
  ];

  code_examples_6: CodeModel[] = [
    {
      label: 'HTML',
      code: ex06_html,
      language: 'html',
    },
    {
      label: 'TS',
      code: ex06_ts,
      language: 'typescript',
    },
    /* {
      label: 'SCSS',
      code: ex06_scss,
      language: 'css',
    }, */
    {
      label: 'lc-table-ov04.models.ts',
      code: ex06_models,
      language: 'typescript',
    },
  ];

  ngOnInit() {}
}
