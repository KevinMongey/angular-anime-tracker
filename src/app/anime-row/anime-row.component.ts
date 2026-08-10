import { Component, input, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-anime-row',
  templateUrl: './anime-row.component.html',
  styleUrls: ['./anime-row.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle],
})
export class AnimeRowComponent {

  @Input() title = '';
  @Input() anime: any[] = [];
}
