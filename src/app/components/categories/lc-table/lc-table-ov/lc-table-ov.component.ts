import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FileLoaderService } from 'src/app/shared/services/file-loader.service';
import {
  html as ex01_html,
  ts as ex01_ts,
} from './examples/lc-table-ov01/lc-table-ov01.exports';

@Component({
  selector: 'app-lc-table-ov',
  templateUrl: './lc-table-ov.component.html',
  styleUrls: ['./lc-table-ov.component.scss'],
})
export class LcTableOverviewComponent implements OnInit {
  ex01_html: string = ex01_html;
  ex01_ts: string = ex01_ts;

  ngOnInit() {}
}
