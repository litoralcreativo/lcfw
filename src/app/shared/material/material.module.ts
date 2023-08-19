import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Registrar el icono SVG
    this.matIconRegistry.addSvgIcon(
      'lcfw',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/lcfw-light.svg')
    );
  }
}
