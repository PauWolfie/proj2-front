import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  logout(){
    if(confirm("Do you want to logout?")){
      window.location.href = "http://localhost:4200/login";
    }else{
      return;
    }
  }
}
