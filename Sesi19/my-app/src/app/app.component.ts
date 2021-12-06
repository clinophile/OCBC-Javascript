import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belajar Angular FSD OCBC Batch 2';
  message = '';
  messages = ["Hallo", "Kawan!"]


  //ngIf
  isLoggedIn = false
  userData = {
    name: ""
  }


  constructor() {

  }

  checkLoginState() {
    return this.isLoggedIn
  }
  
  showMessage(e: string) {
    this.message= e
  }

  login(name: string) {
    this.isLoggedIn = true
    this.userData.name = name
  }

  logout() {
    this.isLoggedIn = false
    this.userData.name = ""
  }
}