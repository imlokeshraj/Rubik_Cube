import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rubik-Solver-View';
  faceno = 1 ;
  
  
   
  ngOnInit(){}
  left() {
    if(this.faceno == 1 )
      this.faceno = 4;
    else
      this.faceno--;
    
    console.log("Go Left")
  }

  right() {
    if(this.faceno == 4)
      this.faceno = 1
    else
      this.faceno++;
    
    console.log("Go Right")
  }

  top() {
    this.faceno = 5;
    console.log("Go Top")
  }

  bottom() {
    this.faceno = 6;
    console.log("Go Bottom")
  }
}
