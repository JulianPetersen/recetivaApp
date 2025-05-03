import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private alertController:AlertController) { }

  URL: string = "http://localhost:5000/api"


  getUserIdByLocalStorage(){
    const userId = localStorage.getItem('userId')
    return userId
  }

  isEmailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  async presentAlert(title:string,message:string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
