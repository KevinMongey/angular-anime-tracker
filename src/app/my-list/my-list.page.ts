import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCol, IonRow, IonGrid, IonButton, IonIcon } from '@ionic/angular/standalone';

import { close } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { AnimeCardComponent } from "../anime-card/anime-card.component";
import { MyList } from '../services/my-list';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, AnimeCardComponent, IonCol, IonRow, IonGrid, IonButton, IonIcon]
})
export class MyListPage {

  animeList: any[] = [];

  constructor(private myList: MyList) { 
    addIcons({
      close
    });
  }

  async ionViewDidEnter() {
    this.animeList = await this.myList.getList();
  }

  async removeAnime(id: number) {
    await this.myList.removeAnime(id);

    this.animeList = await this.myList.getList();
  }

}
