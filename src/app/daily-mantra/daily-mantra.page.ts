import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ImageModalPage } from '../image-modal/image-modal.page';
@Component({
  selector: 'app-daily-mantra',
  templateUrl: './daily-mantra.page.html',
  styleUrls: ['./daily-mantra.page.scss'],
})
export class DailyMantraPage implements OnInit {

  rnd; 
  
   mI=[];

   images = [1, 2, 3, 4, 5, 6, 7, 8];

  sliderOpts={
    zoom: false,
    SlidesPerview: 2,
    centeredSlides: true,
    spaceBetween: 15
  };

    constructor(){
  }

  ngOnInit() {    
    
    
    
  }
  // openPreview(img) {
  //   this.modalController.create({
  //     component: ImageModalPage,
  //     componentProps: {
  //       img: img 
  //     }
  //   }).then(modal => modal.present());

  // }


}