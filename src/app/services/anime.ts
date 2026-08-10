import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Anime {

  

  constructor(private http: HttpClient) { 

  }

  getTopAnime() {
    return this.http.get("https://api.jikan.moe/v4/top/anime");
  }

  getSeasonNow() {
    return this.http.get("https://api.jikan.moe/v4/seasons/now")
  }
}
