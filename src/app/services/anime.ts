import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Anime {

  

  constructor(private http: HttpClient) { 

  }

  getTopAnime() {
    return this.http.get('https://api.tenrai.org/v1/top/anime');
  }

  getSeasonNow() {
    return this.http.get('https://api.tenrai.org/v1/seasons/now?sfw=true');
  }

  getSeasonUpcoming() {
    return this.http.get('https://api.tenrai.org/v1/seasons/upcoming');
  }

  searchAnime(query: string) {
    return this.http.get(`https://api.tenrai.org/v1/anime?q=${query}`)
  }

  searchAnimeByLetter(query: string) {
    return this.http.get(`https://api.tenrai.org/v1/anime?letter=${query}`)
  }
}
