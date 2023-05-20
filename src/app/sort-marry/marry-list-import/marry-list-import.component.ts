import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-marry-list-import',
  templateUrl: './marry-list-import.component.html',
  styleUrls: ['./marry-list-import.component.scss']
})
export class MarryListImportComponent {
  @ViewChild('MarryListInput') input: null | ElementRef<HTMLTextAreaElement> = null;

  public import(): Character[] {
    const value = this.input?.nativeElement.value;
    const charnames: string[] = value?.split('\n') ?? [];

    const characters: Character[] = [];
    for (const name of charnames) {
      const normalizedName = name.split('|')[0].trim();
      if (normalizedName) {
        characters.push({
          name: normalizedName
        });
      }
    }

    return characters;
  }

}

