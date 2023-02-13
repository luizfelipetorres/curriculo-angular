import { Component } from '@angular/core';
import { ICurriculum } from 'src/app/interfaces/ICurriculum';
import { mock } from '../../../mock/curriculum'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public mock: ICurriculum = mock
}
