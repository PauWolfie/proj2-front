import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  logout(){
    if(confirm("Do you want to logout?")){
      window.location.href = "http://localhost:4200/login";
    }else{
      return;
    }
  }
}
