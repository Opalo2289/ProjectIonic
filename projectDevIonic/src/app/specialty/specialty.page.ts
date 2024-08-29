import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCard, IonButtons, IonMenuButton, IonTabButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, IonThumbnail } from '@ionic/angular';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SpecialtyPage implements OnInit {

  public specialty!: string;
  private activatedRoute = inject(ActivatedRoute);
  public cardData = {
    cardTitle: 'Especialidades',
    cardSubtitle: 'Elige tu especialidad',
    items: [
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Cardiologia'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Ginecologia'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Nutricion'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Endocrinologia'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.specialty = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
