import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import type { CellClassRules, ColDef, RowClassRules, RowSelectionOptions } from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { themeQuartz, Theme, iconSetAlpine } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  isBrowser = false;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  // không cần khai báo css thủ công
  Mytheme = themeQuartz.withPart(iconSetAlpine).withParams({
    accentColor: '#0086F4',
    backgroundColor: '#F1EDE1',
    borderColor: '#98968F',
    borderRadius: 0,
    browserColorScheme: 'light',
    chromeBackgroundColor: {
      ref: 'backgroundColor',
    },
    fontFamily: {
      googleFont: 'Pixelify Sans',
    },
    fontSize: 15,
    foregroundColor: '#605E57',
    headerBackgroundColor: '#E4DAD1',
    headerFontSize: 15,
    headerFontWeight: 700,
    headerTextColor: '#3C3A35',
    rowVerticalPaddingScale: 1.2,
    spacing: 5,
    wrapperBorderRadius: 0,
  });

  theme: Theme | 'legacy' = this.Mytheme;

  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ];

  colDefs: ColDef[] = [
    {
      field: 'make',
      filter: true,
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['BMW', 'VinFast', 'KIA'],
      },
    },
    {
      field: 'model',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Model X', 'Model Y', 'Model Z'],
      },
      cellClassRules: {
        'rag-green': (params) => params.value === 'Model Y',
      },
    },
    {
      valueFormatter: (p) => '$' + p.value.toLocaleString(),
      field: 'price',
    },
    {
      field: 'electric',
      editable: true,
      cellClassRules: {
        'rag-green': (params) => params.value === true,
      },
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  rowSelection: RowSelectionOptions = {
    mode: 'multiRow',
  };

  rowClassRules: RowClassRules = {
    'rag-red': (params) => ['Ford', 'Fiat'].includes(params.data.make),
  }; // ap dung cho nhieu row

  singleRowClassRules: RowClassRules = {
    'rag-red': (params) => params.data.make === 'Ford',
  }; // ap dung cho 1 row

  pagination = true; // cho ho tro page size
  paginationPageSize = 6; // page size mac dinh
  paginationPageSizeSelector = [1, 2, 3, 6]; // selector page size
}
