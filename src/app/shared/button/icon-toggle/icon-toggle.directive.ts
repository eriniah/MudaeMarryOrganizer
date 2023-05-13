import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

/**
 * Directive to turn an icon button into a toggle-able button. Switches between two icons
 * Add to a button element with a child mat-icon element
 */
@Directive({
  selector: 'button[appIconToggle]'
})
export class IconToggleDirective implements AfterContentInit {
  public activeIcon: string = '';
  private enabledIcon: string = '';
  private disabledIcon: string = '';

  @Input('appIconToggle') set icons(icons: string | [string, string]) {
    let iconArray = [];
    if (typeof(icons) === 'string') {
      iconArray = icons.split('|');
    } else {
      iconArray = icons;
    }
    this.enabledIcon = iconArray[0];
    this.disabledIcon = iconArray[1];
    this.repaint();
  }

  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  constructor(@Host() private readonly host: ElementRef<HTMLButtonElement>) { }

  ngAfterContentInit() {
    this.repaint();
  }

  @HostListener('click')
  public handleClick(): void {
    this.setValue(!this.value);
  }

  public setValue(value: boolean): void {
    this.value = value;
    this.repaint();
    this.valueChange.emit(this.value)
  }

  public repaint(): void {
    if (this.value) {
      this.activeIcon = this.enabledIcon;
    } else {
      this.activeIcon = this.disabledIcon;
    }
    if (this.host.nativeElement.childNodes.length) {
      this.host.nativeElement.childNodes.forEach(child => {
        if (child.nodeName === 'MAT-ICON') {
          child.textContent = this.activeIcon;
        }
      });
    }
  }

}
