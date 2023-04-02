import { Component } from '@angular/core';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header>
        <ngx-header-client></ngx-header-client>
      </nb-layout-header>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer-client></ngx-footer-client>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {}
