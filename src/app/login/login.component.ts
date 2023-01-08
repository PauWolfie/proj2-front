import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  async login() {
    const div = document.getElementById("loginDiv");

    const img = document.createElement("img");
    img.src = "assets/img/charging.gif";
    img.width = 50;
    
    div?.appendChild(img);
    setTimeout(() => {
      window.location.href = "http://localhost:4200/home";
    }, 3000);
  }
}