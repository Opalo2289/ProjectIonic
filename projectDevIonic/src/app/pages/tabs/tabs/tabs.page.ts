import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabs, IonTabButton, IonIcon, IonMenuButton, IonButtons, IonButton, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {homeOutline,heartCircleOutline,searchOutline,personOutline,calendarOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonButton, IonButtons, IonIcon,IonMenuButton, IonTabButton, IonTabs, IonTabBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({
      homeOutline,
      heartCircleOutline,
      searchOutline,
      personOutline,
      calendarOutline
    })
   }

  ngOnInit() {
  }

}