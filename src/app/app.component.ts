import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonMenu, IonSplitPane, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonSplitPane, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonList, RouterLink],
})
export class AppComponent {
  constructor() {}
}
