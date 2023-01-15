import { Component } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  logout(){
    if(confirm("Do you want to logout?")){
      window.location.href = "http://localhost:4200/login";
    }else{
      return;
    }
  }
}
