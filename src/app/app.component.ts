import { Component, OnInit } from '@angular/core';
import { red } from 'color-name';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rubik-Solver-View';
  faceno = 1 ;
  // diff = 0;
  // color = "red";
  // sideDeg = 0;
  // sideRotation = "rotate("+this.sideDeg+"deg)";
  bgcolor = "red";
  leftRightDisabled = false;
  selectedColor;
  colorClass;
  // selectedColorString;
  
  
   
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
    // this.sideDeg += -90
    // this.sideRotation = "rotate("+this.sideDeg+"deg)";
    this.faceno = 5;
    this.leftRightDisabled = true;
    console.log("Go Top")
  }

  bottom() {
    // this.sideDeg += 90
    // this.sideRotation = "rotate("+this.sideDeg+"deg)";
    this.faceno = 6;
    this.leftRightDisabled = true;
    console.log("Go Bottom")
  }

  rotate() {
    console.log("Rotate")
  }

  changeColor()
  {
    if(this.selectedColor == "white")
    this.colorClass =   "color1"
    if(this.selectedColor == "orange")
    this.colorClass =   "color2"
  }

  sides()
  {
    this.faceno=1;
    this.leftRightDisabled = false;
  }

  onColorChange(color)
  {
    this.selectedColor = color;
  }

}
