import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

import { Anime } from '../services/anime'
import { returnUpBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonList, IonItem, IonLabel]
})
export class SearchPage {

  results: any[] = [];

  constructor(private animeService: Anime) {}

    handleSearchAnime(event: any) {
      const query = event.target.value?.trim().toLowerCase();

      if (!query) {
        this.results = [];
        return;
      }
      if (query.length == 1) {
        this.animeService.searchAnimeByLetter(query).subscribe((result: any) => {
        this.results = result.data;
      });
      return; 

      }

      this.animeService.searchAnime(query).subscribe((result: any) => {
        this.results = result.data;
      });
    }

}
