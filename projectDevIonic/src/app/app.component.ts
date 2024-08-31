import { Component } from '@angular/core';
import { IonApp, IonSplitPane, IonRouterOutlet, IonRouterLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SpecialtyPage } from "./specialty/specialty.page";
import { MenuComponent } from './components/menu/menu.component';
import { IonAvatar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle,  IonApp, IonSplitPane, IonRouterLink, IonRouterOutlet, SpecialtyPage, MenuComponent, IonAvatar],
})
export class AppComponent {
  idValue: string = 'main-content';
}
