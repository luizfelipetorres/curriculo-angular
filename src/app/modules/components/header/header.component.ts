import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public title:string = 'luiz felipe torres farias';
  public date:Date = new Date();
  public getNow(): void {
    this.date = new Date();
  }

}
