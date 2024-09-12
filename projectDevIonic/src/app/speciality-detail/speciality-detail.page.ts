import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-speciality-detail',
  templateUrl: './speciality-detail.page.html',
  styleUrls: ['./speciality-detail.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule]
})
export class SpecialityDetailPage implements OnInit {
  public specialtyDetail!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    console.log('entra')
    this.specialtyDetail = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
