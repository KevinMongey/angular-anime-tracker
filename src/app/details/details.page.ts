import { Component, OnInit } from '@angular/core';
import { IonChip, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

import { starSharp, play, bookmark } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { MyList } from '../services/my-list';
import { Anime } from '../services/anime'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonIcon, IonButton, IonBackButton, IonButtons]
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private animeService: Anime, private myList: MyList) {
    addIcons({
      starSharp,
      play,
      bookmark,
    });
  }

  anime: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if(id) {
      this.animeService.getAnimeById(Number(id)).subscribe((result: any) => {
        this.anime = result.data;
      });
    }

  }

  async addToList() {
    await this.myList.addAnime(this.anime);
  }

}
