import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public name: string = 'fulano';
  public date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
