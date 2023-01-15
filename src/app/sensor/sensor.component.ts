import { Component } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent {
  logout(){
    if(confirm("Do you want to logout?")){
      window.location.href = "http://localhost:4200/login";
    }else{
      return;
    }
  }
}
