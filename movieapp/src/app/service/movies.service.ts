import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private data = new BehaviorSubject<any>({});
  moviesData: any = [];
  constructor(private http: HttpClient) {}
  getMovies(): Observable<any> {
    return this.http.get('http://localhost:3000/getmovies').pipe(
      tap({
        next: (data) => {
          this.moviesData = data;
          console.log(data, 'FROM SERVICE');
        },
        error: (error) => console.log(error),
      })
    );
  }
  setData(data: any) {
    this.data.next(data);
  }

  getData() {
    console.log(this.data, 'SHARED DATA');
    return this.data.asObservable();
  }
}
