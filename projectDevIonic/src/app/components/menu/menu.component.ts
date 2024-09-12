import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonAccordion, IonAccordionGroup, IonHeader, IonToolbar, IonTitle, IonTabs, IonTabButton, IonTabBar, IonSearchbar, IonMenuButton, IonButtons, IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, calendarOutline, peopleOutline, calendarNumberOutline, keyOutline, personAddOutline, cardOutline, storefrontOutline } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonAvatar,
    IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonHeader, IonAccordionGroup, IonAccordion, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonMenuButton, IonButtons
  ],
})
export class MenuComponent {
  @Input() idValue!: string;


  public appPages = {
    personal: [
      { title: 'Citas y Examenes', url: '/folder/busqueda_citas', icon: 'calendar-number' },
      { title: 'Agendamiento de citas', url: '/specialty/Gestion de citas medicas', icon: 'calendar' },
      {
        title: 'Usuarios',
        url: '/folder/usuarios',
        icon: 'people',
        subPages: [
          { title: 'Permisos de usuarios', url: '/folder/listar_usuarios', icon: 'key' },
          { title: 'Gestionar usuario', url: '/folder/crear_usuario', icon: 'person-add' }
        ]
      },
      { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
      { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
      { title: 'Archived', url: '/folder/archived', icon: 'archive' },
      { title: 'Trash', url: '/folder/trash', icon: 'trash' },
      { title: 'Spam', url: '/folder/spam', icon: 'warning' }
    ],
    comparas: [
      { title: 'Pedidos y Pagos', url: '/folder/outbox', icon: 'card' },
      { title: 'Marketplace', url: '/marketplace', icon: 'storefront' }
    ]
  };

  public labels = [
    { title: 'Pedidos y Pagos', url: '/folder/outbox', icon: 'card' },
    { title: 'Marketplace', url: '/folder/favorites', icon: 'storefront' },
  ];

  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, calendarOutline, peopleOutline, calendarNumberOutline, keyOutline, personAddOutline, cardOutline, storefrontOutline });
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
