import { Component } from '@angular/core';
import { Anime } from '../services/anime'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimeRowComponent } from "../anime-row/anime-row.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, AnimeRowComponent],
})
export class HomePage {

  topAnimeLimited: any [] = [];
  seasonalAnime: any [] = [];
  topAnime: any[] = [];
  upcomingAnime: any[] = [];

  constructor(private animeService: Anime) {
    this.animeService.getTopAnime().subscribe((result: any) => {
      this.topAnime = result.data;
      this.topAnimeLimited = result.data.slice(0,4);
    });

    this.animeService.getSeasonNow().subscribe((result: any) => {
      this.seasonalAnime = result.data;
    });

    this.animeService.getSeasonUpcoming().subscribe((result: any) => {
      this.upcomingAnime = result.data;
    });
  }
}
