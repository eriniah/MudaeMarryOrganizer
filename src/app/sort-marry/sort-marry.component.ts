import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MarryListImportComponent} from "./marry-list-import/marry-list-import.component";
import {MatSnackBar} from "@angular/material/snack-bar";

interface ImportDialogData {
  import(characters: Character[]): void;
}

interface ExportDialogData {
  characters: Character[];
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
      name: 'Rem'
    },
    {
      name: 'Mai Sakurajima'
    },
    {
      name: 'Megumin'
    },
    {
      name: 'Nezuko Kamado'
    }
  ];

  constructor(private readonly dialog: MatDialog,
              private readonly snackBar: MatSnackBar) {
  }

  public openImportDialog(): void {
    this.dialog.open(SortMarryImportDialogComponent, {
      height: '500px',
      width: '500px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        import: (characters: Character[]) => this.characters = characters
      }
    });
  }

  public copy(): void {
    const dataString = "!sortmarry " + this.characters.map((c: Character) => c.name).join(" $ ");
    navigator.clipboard.writeText(dataString).then((v) =>
      this.snackBar.open('Copied to clipboard!', undefined, { duration: 500 })
    );
  }
}

@Component({
  selector: 'app-sort-marry-import-dialog',
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
export class SortMarryImportDialogComponent {
  @ViewChild(MarryListImportComponent) importComponent: MarryListImportComponent | null = null;

  constructor(public dialogRef: MatDialogRef<SortMarryImportDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public import(): void {
    if (this.importComponent) {
      this.data.import(this.importComponent.import());
    }
    this.close();
  }

  public close(): void {
    this.dialogRef.close();
  }
}
