import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MarryListImportComponent} from "./marry-list-import/marry-list-import.component";

interface DialogData {
  import(characters: Character[]): void
}

@Component({
  selector: 'app-sort-marry',
  templateUrl: './sort-marry.component.html',
  styleUrls: ['./sort-marry.component.scss']
})
export class SortMarryComponent {
  public characters: Character[] = [
    {
      name: 'Hatsune Miku'
    },
    {
      name: 'Bongo Cat'
    },
    {
      name: 'Gawr Gura'
    }
  ];

  constructor(private readonly dialog: MatDialog) {
  }

  public openImportDialog(): void {
    this.dialog.open(SortMarryDialogComponent, {
      height: '500px',
      width: '500px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        import: (characters: Character[]) => this.characters = characters
      }
    })
  }
}

@Component({
  selector: 'app-sort-marry-dialog',
  template: `
    <h1 mat-dialog-title>Import mymarry</h1>
    <div mat-dialog-content>
      <app-marry-list-import></app-marry-list-import>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Cancel</button>
      <button mat-button (click)="import()">Import</button>
    </div>
  `
})
export class SortMarryDialogComponent {
  @ViewChild(MarryListImportComponent) importComponent: MarryListImportComponent | null = null;

  constructor(public dialogRef: MatDialogRef<SortMarryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public close(): void {
    this.dialogRef.close();
  }

  public import(): void {
    if (this.importComponent) {
      this.data.import(this.importComponent.import());
    }
    this.close();
  }
}
