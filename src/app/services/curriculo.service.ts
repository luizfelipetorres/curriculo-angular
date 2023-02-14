import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { ICurriculum } from '../interfaces/ICurriculum';
import { mock } from '../mock/curriculum'

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `http://localhost:3000`

  public getCv(): Observable<ICurriculum> {
    return this
      .http
      .get<ICurriculum>(`${this.baseUrl}/cv`)
  }
}
