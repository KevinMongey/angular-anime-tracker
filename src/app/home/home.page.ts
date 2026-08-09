import { Component } from '@angular/core';
import { Anime } from '../services/anime'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton],
})
export class HomePage {

  topAnime: any [] = [];

  constructor(private animeService: Anime) {
    this.animeService.getTopAnime().subscribe((result: any) => {

    this.topAnime = result.data.slice(0,3);
  });
  }
}
