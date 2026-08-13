import { Component, Input } from '@angular/core';
import { AnimeCardComponent } from "../anime-card/anime-card.component";

@Component({
  selector: 'app-anime-row',
  templateUrl: './anime-row.component.html',
  styleUrls: ['./anime-row.component.scss'],
  standalone: true,
  imports: [AnimeCardComponent],
})
export class AnimeRowComponent {

  @Input() title = '';
  @Input() anime: any[] = [];

}
