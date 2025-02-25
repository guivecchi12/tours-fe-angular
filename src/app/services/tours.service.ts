import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Tour } from '../model/tour';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  constructor(private http: HttpClient) {}

  getTourById(tourId: string): Observable<Tour> {
    return this.http
      .get<{ data: Tour }>(
        `${environment.API_URL}${environment.TOURS_ENDPOINT}/${tourId}`
      )
      .pipe(
        map((res) => res['data']),
        catchError((err) => {
          throw 'error loading tours, Details: ' + err;
        }),
        shareReplay()
      );
  }
}
