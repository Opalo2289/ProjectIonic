import { Component } from '@angular/core';
import { IonApp, IonSplitPane, IonRouterOutlet, IonRouterLink, IonTitle, IonToolbar, IonIcon, IonAccordionGroup, IonContent, IonListHeader, IonNote, IonAccordion, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { SpecialtyPage } from "./specialty/specialty.page";
import { MenuComponent } from './components/menu/menu.component';
import { IonAvatar } from '@ionic/angular/standalone';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonicModule, IonMenuToggle } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,
    RouterModule,
    CommonModule, MenuComponent],
})
export class AppComponent {
  idValue: string = 'main-content';
  public appPages = [
    // { title: 'Citas para usuarios', url: '/folder/busqueda_citas', icon: 'mail' },
    { title: 'Entrena', url: '/specialty/planea', icon: 'mail' },
    { 
      title: 'Usuarios', 
      // url: '/folder/usuarios', 
      icon: 'mail',
      subPages: [
        { title: 'Permisos de usurarios', url: '/folder/listar_usuarios', icon: 'list' },
        { title: 'Gestionar usuario', url: '/folder/crear_usuario', icon: 'person-add' },
      ]
    },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  handleItemClick(hasSubmenu: boolean) {
    // Si el item tiene un submenú, no haces nada (no cambias la vista)
    if (hasSubmenu) {
      // Aquí podrías opcionalmente manejar lógica para mostrar algo si se requiere
      return false; 
    }
    // Si no tiene submenú, dejas que se cierre el menú al cambiar la vista
    return true;
  }
}
