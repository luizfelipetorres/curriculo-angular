import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
