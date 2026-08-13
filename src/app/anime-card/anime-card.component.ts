import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonChip, IonIcon, IonCardContent } from '@ionic/angular/standalone';
import { starSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonChip, IonIcon, IonCardContent]
})
export class AnimeCardComponent {

  @Input() anime: any;

  constructor() {
    addIcons({
      starSharp
    });
  }
}
