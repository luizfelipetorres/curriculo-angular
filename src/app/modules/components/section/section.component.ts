import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/IItem';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() public item: IItem | undefined
  public showDetails: boolean = false
}
