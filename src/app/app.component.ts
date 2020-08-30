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
  initialClassName;
  tempCube;
  Cube1;

  cubeBlocks = new Array(6);
  // selectedColorString;
  
  
   
  ngOnInit(){
    this.tempCube = "fieldt block emptyPattern";
    this.Cube1 = "field1 block emptyPattern";

    this.populateInitially();
  }

  populateInitially()
  {
    for(var i=0; i<6; i++)
    {
      this.cubeBlocks[i] = new Array(9);
      for(var j=0; j<9; j++)
      {
        var field = "field"+(j+1);
        var block = "block";
        var empty = "emptyPattern";
        var classes = field + " " + block + " " + empty;

        this.cubeBlocks[i][j] = classes;
      }
    }
  }

  StoreFaceColors(faceSide)
  {
    var index = faceSide - 1;
    var classId;
    for(var i=0; i<9; i++)
    {
      classId = faceSide + "_" + (i+1);
      this.cubeBlocks[index][i] = document.getElementById(classId).className;
    }
  }

  left() {

    this.StoreFaceColors(this.faceno);
    if(this.faceno == 1 )
      this.faceno = 4;
    else
      this.faceno--;
    
    console.log("Go Left")
  }

  right() {

    this.StoreFaceColors(this.faceno);
    if(this.faceno == 4)
      this.faceno = 1
    else
      this.faceno++;
    
    this.cubeBlocks[0][0] = document.getElementById("1_1").className;
    console.log("Go Right")
  }

  top() {
    
    this.StoreFaceColors(this.faceno);
    // this.sideDeg += -90
    // this.sideRotation = "rotate("+this.sideDeg+"deg)";
    this.faceno = 5;
    this.leftRightDisabled = true;
    console.log("Go Top")
  }

  bottom() {
    
    this.StoreFaceColors(this.faceno);
    // this.sideDeg += 90
    // this.sideRotation = "rotate("+this.sideDeg+"deg)";
    this.faceno = 6;
    this.leftRightDisabled = true;
    console.log("Go Bottom")
  }

  rotate() {
    console.log("Rotate")
  }

  changeColor(idFromView)
  {
    // if(this.selectedColor == "White")
    // this.colorClass =   "color1"
    // if(this.selectedColor == "orange")
    // this.colorClass =   "color2"
    var Div_name = document.getElementById(idFromView);
     this.initialClassName = Div_name.className.substring(0,12);
    switch(this.selectedColor)
    {
      case "White" : Div_name.className = this.initialClassName.concat(" color1");
      break;

      case "Orange" : Div_name.className = this.initialClassName.concat(" color2");
      break;

      case "Green" : Div_name.className = this.initialClassName.concat(" color3");
      break;

      case "Red" : Div_name.className = this.initialClassName.concat(" color4");
      break;

      case "Blue" : Div_name.className = this.initialClassName.concat(" color5");
      break;

      case "Yellow" : Div_name.className = this.initialClassName.concat(" color6");
      break;

    }
  }

  sides()
  {
    this.StoreFaceColors(this.faceno);
    this.faceno=1;
    this.leftRightDisabled = false;
  }

  onColorChange(color)
  {
    this.selectedColor = color;
  }

}
