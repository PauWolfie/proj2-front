import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  logout(){
    if(confirm("Do you want to logout?")){
      window.location.href = "http://localhost:4200/login";
    }else{
      return;
    }
  }
}
