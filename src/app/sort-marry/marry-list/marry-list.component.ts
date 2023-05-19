import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-marry-list',
  templateUrl: './marry-list.component.html',
  styleUrls: ['./marry-list.component.scss']
})
export class MarryListComponent {
  @Input() characters: Character[] = [];

  public characterDropped(event: any): void {
    const character = this.characters.splice(event.previousIndex, 1)[0];
    this.characters.splice(event.currentIndex, 0, character);
  }

}
