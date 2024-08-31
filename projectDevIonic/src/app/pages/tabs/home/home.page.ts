import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonAvatar, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {notificationsOutline,pawOutline,fitnessOutline, businessOutline, flaskOutline, peopleOutline, storefrontOutline, cashOutline } from 'ionicons/icons';
import { CardBtnMiniComponent } from "../../../components/card-btn-mini/card-btn-mini.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonIcon, IonButton, IonButtons, IonAvatar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    CommonModule,
    FormsModule, CardBtnMiniComponent]
})
export class HomePage implements OnInit {

  categories=[
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"flask","name":"Laboratory","url":"" },
    {"icon":"paw","name":"Pets","url":"" },
    {"icon":"business","name":"Hospitals","url":"" },
  ]

  services=[
    {"icon":"storefront","name":"Marketplace","url":"" },
    {"icon":"cash","name":"Pagos","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
    {"icon":"people","name":"Doctors","url":"" },
  ]

  appointments=[
    {"img":"https://randomuser.me/api/portraits/women/14.jpg","name":"Bernice Hawkins","position":"Dermatologist","date":"June 22, 2020"},
    {"img":"https://randomuser.me/api/portraits/men/97.jpg","name":"Albert James","position":"Cardiologist","date":"July 15, 2026"},
  ]

  constructor() { 
    addIcons({
      notificationsOutline,
      pawOutline,
      fitnessOutline,
      businessOutline,
      flaskOutline,
      peopleOutline,
      storefrontOutline,
      cashOutline
    })
  }

  ngOnInit() {
  }

}
