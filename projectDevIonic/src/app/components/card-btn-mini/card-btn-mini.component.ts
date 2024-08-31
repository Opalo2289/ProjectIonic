import { Component, Input, input, OnInit } from '@angular/core';
import { IonMenuButton, IonToolbar, IonTitle, IonHeader, IonContent,IonCol, IonRow, IonGrid, IonIcon, IonButton, IonButtons, IonAvatar,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-btn-mini',
  templateUrl: './card-btn-mini.component.html',
  styleUrls: ['./card-btn-mini.component.scss'],
  standalone:true,
  imports:[
    IonCol, 
    IonRow, 
    IonGrid, 
    IonIcon, 
    IonButton, 
    IonButtons, 
    IonAvatar, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
  ]
})
export class CardBtnMiniComponent  implements OnInit {

  @Input() valueItems!:any;
  @Input() titleValue!:string;

  constructor() { }

  ngOnInit() {}

}
