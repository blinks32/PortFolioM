import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StatusBar } from '@capacitor/status-bar';
import { LoadingController, AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = null;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nav: NavController
  ) {

  
  }

  ngOnInit() {
  }

}