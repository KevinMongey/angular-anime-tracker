import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MyList {
  constructor(private storage: Storage) {}

  async addAnime(anime: any) {
    await this.storage.create();
    let list = await this.storage.get('myList');

    if(!list) {
      list = [];
    }

    const duplicate = list.some((item: any) => item.mal_id == anime.mal_id);
    if(!duplicate) {
      list.push(anime);
      await this.storage.set('myList', list);
    } 
  }

  async removeAnime(id: number) {
    await this.storage.create();
    let list = await this.storage.get('myList');

    if (!list) {
      return;
    }
    else {
      list = list.filter((anime: any) => anime.mal_id !== id);
      await this.storage.set('myList', list);
    }
  }

  async getList() {
    await this.storage.create();
    const list = await this.storage.get('myList');
    return list || [];
  }


}
