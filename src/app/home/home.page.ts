import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, Platform, NavController, MenuController, AlertController, LoadingController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  contactForm: FormGroup; // Angular reactive form

  constructor(public nav: NavController, private loadingCtrl: LoadingController,  private fb: FormBuilder, private alertCtrl: AlertController) {
    // Initialize the form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


  //start the scene
  async ngOnInit() {
   
  }

  async sendEmail() {
    // Create a loading spinner
    const loading = await this.loadingCtrl.create({
        message: 'Sending your message...',
    });

    if (this.contactForm.valid && this.contactForm.get('email')?.value) {
        const templateParams = {
            from_name: this.contactForm.get('name')?.value,
            to_name: 'Chinedu',
            message: this.contactForm.get('message')?.value,
            from_email: this.contactForm.get('email')?.value,
            to_email: 'playstudio86@gmail.com',
        };

        // Show the loading spinner
        await loading.present();

        emailjs.send('service_nv9pe6g', 'template_veo4r98', templateParams, 'WKkpGLeomUoJAg0om')
            .then(async (response) => {
                console.log('Email sent successfully!', response.status, response.text);

                // Hide the loading spinner
                await loading.dismiss();

                // Show a success alert
                const alert = await this.alertCtrl.create({
                    header: 'Success',
                    message: 'Your message has been sent successfully!',
                    buttons: ['OK'],
                });
                await alert.present();
            })
            .catch(async (error) => {
                console.error('Failed to send email:', error);

                // Hide the loading spinner
                await loading.dismiss();

                // Show an error alert
                const alert = await this.alertCtrl.create({
                    header: 'Error',
                    message: 'There was a problem sending your message. Please try again.',
                    buttons: ['OK'],
                });
                await alert.present();
            });
    } else {
        // Dismiss the loading spinner if it's still visible
        await loading.dismiss();

        // Show a validation error alert
        const alert = await this.alertCtrl.create({
            header: 'Validation Error',
            message: 'Please fill out all required fields and ensure the email is valid.',
            buttons: ['OK'],
        });
        await alert.present();
    }
}




gotoProfile(){
  this.nav.navigateForward('profile');
}

scrollToBottom() {
  this.content.scrollToBottom();
}




}
