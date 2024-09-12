import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCard, IonButtons, IonMenuButton, IonTabButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule, IonThumbnail } from '@ionic/angular';
import { SpecialityDetailPage } from '../speciality-detail/speciality-detail.page';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    SpecialityDetailPage
  ]
})
export class SpecialtyPage implements OnInit {

  detail = SpecialityDetailPage
  public specialty!: string;
  private activatedRoute = inject(ActivatedRoute);
  public cardData = {
    cardTitle: 'Elige tu entrenador personalizado',
    // cardSubtitle: 'Elige tu especialidad',
    items: [
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Carlos',
        // url: '/specialtyDetail/carlos'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Juan',
        // url: '/specialtyDetail/carlos'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Mario',
        // url: '/specialtyDetail/carlos'
      },
      {
        thumbnail: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        label: 'Felipe',
        // url: '/specialtyDetail/carlos'
      }
    ]
  };
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('entra-no-detalle')
    this.specialty = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTrainner()
  }

  getTrainner() {

  }

  getDetailTrainner(label: string) {
    this.router.navigate([`specialty/${this.specialty}/specialtyDetail/${label}`]);
    // this.router.navigate([`/speciality-detail/${label}`]);
  }

}
