import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlickrPhoto, FlickrResponse } from '../models/flower.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private apiKey = 'a5e95177da353f58113fd60296e1d250';
  private baseUrl = 'https://api.flickr.com/services/rest/';
  private perPage = 20;

  photos$ = new BehaviorSubject<FlickrPhoto[]>([]);
  totalPhotos$ = new BehaviorSubject<number>(0);
  private currentPage$ = new BehaviorSubject<number>(1);
  private currentColorCode$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<FlickrPhoto[]> {
    return this.photos$.asObservable();
  }

  getTotalPhotos(): Observable<number> {
    return this.totalPhotos$.asObservable();
  }

  getCurrentPage(): Observable<number> {
    return this.currentPage$.asObservable();
  }

  searchFlowers(colorCode: string | null = null, page: number = 1): Observable<FlickrPhoto[]> {
    this.currentPage$.next(page);
    this.currentColorCode$.next(colorCode);

    let params = new HttpParams()
      .set('method', 'flickr.photos.search')
      .set('text', 'flowers')
      .set('api_key', this.apiKey)
      .set('format', 'json')
      .set('nojsoncallback', '1')
      .set('page', page.toString())
      .set('per_page', this.perPage.toString());

    if (colorCode !== null) {
      params = params.set('color_codes', colorCode);
    }

    return this.http.get<FlickrResponse>(this.baseUrl, { params }).pipe(
      map(response => {
        if (response.photos && response.photos.photo) {
          this.photos$.next(response.photos.photo);
          this.totalPhotos$.next(parseInt(response.photos.total, 10));
          return response.photos.photo;
        }
        return [];
      }),
      catchError(error => {
        console.error('Error fetching flowers:', error);
        return of([]);
      })
    );
  }

  getImageUrl(photo: FlickrPhoto): string {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  }

  //method for pagination
  loadMore(colorCode: string | null = null): void {
    const currentPage = this.currentPage$.getValue();
    this.searchFlowers(colorCode, currentPage + 1).subscribe();
  }
}
