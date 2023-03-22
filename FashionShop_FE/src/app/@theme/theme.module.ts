import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { BtnSaveComponent } from './components/template/button/save/btn-save.component';
import { BtnAddComponent } from './components/template/button/add/btn-add.component';
import { BtnSearchComponent } from './components/template/button/search/btn-search.component';
import { BtnRefreshComponent } from './components/template/button/refresh/btn-refresh.component';
import { BtnCloseComponent } from './components/template/button/close/btn-close.component';
import { BtnBackComponent } from './components/template/button/back/btn-back.component';
import { BtnSubmitComponent } from './components/template/button/submit/btn-submit.component';
import { BtnUpdateSyncComponent } from './components/template/button/update-sync/btn-update-sync.component';
import { BtnAddSyncComponent } from './components/template/button/add-sync/btn-add-sync.component';
import { BtnDownloadComponent } from './components/template/button/download/btn-download.component';
import { BtnDownloadATagComponent } from './components/template/button/download atag/btn-download-atag.component';
import { BtnCancelComponent } from './components/template/button/cancel/btn-cancel.component';
import { BtnDownloadTemplateComponent } from './components/template/button/download-template/btn-download-template.component';
import { BtnChooseFileExcelComponent } from './components/template/button/choose-file-excel/btn-choose-file-excel.component';
import { BtnImportFileComponent } from './components/template/button/import-file/btn-import-file.component';
import { BtnFileComponent } from './components/template/button/file/btn-file.component';
import { IconApproveComponent } from './components/template/icon/approve/icon-approve.component';
import { IconEllipsisComponent } from './components/template/icon/ellipsis/icon-ellipsis.component';
import { IconDeclineComponent } from './components/template/icon/decline/icon-decline.component';
import { IconExpandComponent } from './components/template/icon/expand/icon-expand.component';
import { IconFileSignatureComponent } from './components/template/icon/file-signature/icon-file-signature.component';
import { IconInfoCircleComponent } from './components/template/icon/info-circle/icon-info-circle.component';
import { IconMinusComponent } from './components/template/icon/minus/icon-minus.component';
import { IconPlusComponent } from './components/template/icon/plus/icon-plus.component';
import { IconReplyComponent } from './components/template/icon/reply/icon-reply.component';
import { IconShareComponent } from './components/template/icon/share/icon-share.component';
import { ChevronRightComponent } from './components/template/icon/chevron-right/chevron-right.component';
import { BtnConfirmComponent } from './components/template/button/confirm/btn-confirm.component';
import { IconUsersCogComponent } from './components/template/icon/users-cog/icon-users-cog.component';
import { IconDeleteComponent } from './components/template/icon/delete/icon-delete.component';
import { IconEditComponent } from './components/template/icon/edit/icon-edit.component';
import { IconInfoComponent } from './components/template/icon/info/icon-info.component';
import { ChevronDownComponent } from './components/template/icon/chevron-down/chevron-down.component';
import { IconBarsComponent } from './components/template/icon/bars/bars.component';
import { IconSearchPlusComponent } from './components/template/icon/search-plus/icon-search-plus.component';
import { IconMinimizeComponent } from './components/template/icon/minimize/icon-minimize.component';
import { IconSearchMinusComponent } from './components/template/icon/search-minus/icon-search-minus.component';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  BtnAddComponent,
  BtnSearchComponent,
  BtnSaveComponent,
  BtnRefreshComponent,
  BtnCloseComponent,
  BtnBackComponent,
  BtnSubmitComponent,
  BtnAddSyncComponent,
  BtnUpdateSyncComponent,
  BtnDownloadComponent,
  BtnDownloadATagComponent,
  BtnCancelComponent,
  BtnChooseFileExcelComponent,
  BtnDownloadTemplateComponent,
  BtnImportFileComponent,
  BtnFileComponent,
  IconApproveComponent,
  IconDeclineComponent,
  IconEllipsisComponent,
  IconExpandComponent,
  IconFileSignatureComponent,
  IconInfoCircleComponent,
  IconMinusComponent,
  IconPlusComponent,
  IconReplyComponent,
  IconShareComponent,
  IconInfoComponent,
  IconEditComponent,
  IconDeleteComponent,
  IconUsersCogComponent,
  BtnConfirmComponent,
  ChevronDownComponent,
  ChevronRightComponent,
  IconBarsComponent,
  IconSearchMinusComponent,
  IconSearchPlusComponent,
  IconMinimizeComponent,
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
      ],
    };
  }
}
