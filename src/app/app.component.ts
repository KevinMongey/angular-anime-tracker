import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon} from '@ionic/angular/standalone';
import { homeSharp, searchSharp, bookmarkSharp, settingsSharp} from 'ionicons/icons';
import { IonApp, IonRouterOutlet, IonMenu, IonSplitPane, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import { NetworkService } from './services/network-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonSplitPane, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonList, RouterLink],
})
export class AppComponent {
  constructor(public network: NetworkService) {
    addIcons({
      homeSharp,
      searchSharp,
      bookmarkSharp,
      settingsSharp
    });
  }
}
