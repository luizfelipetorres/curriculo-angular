import { Component, OnInit } from '@angular/core';
import { ICurriculum } from 'src/app/interfaces/ICurriculum';
import { mock } from 'src/app/mock/curriculum';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public data!: ICurriculum


  constructor(private curriculoService: CurriculoService) { }

  ngOnInit(): void {
    this.curriculoService
      .getCv()
      .subscribe({
        next: (res) => this.data = res,
        error: () => this.data = mock
      })
  }


}
