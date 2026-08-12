import { Component, input, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon } from '@ionic/angular/standalone';
import { starSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-anime-row',
  templateUrl: './anime-row.component.html',
  styleUrls: ['./anime-row.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonChip, IonIcon],
})
export class AnimeRowComponent {

  @Input() title = '';
  @Input() anime: any[] = [];

  constructor() {
    addIcons({
      starSharp
    });
  }
}
