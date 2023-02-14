import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent
  ],
  exports: [HeaderComponent, SectionComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
