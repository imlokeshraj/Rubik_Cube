import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rubik-Solver-View';

  left() {
    console.log("Go Left")
  }

  right() {
    console.log("Go Right")
  }

  top() {
    console.log("Go Top")
  }

  bottom() {
    console.log("Go Bottom")
  }
}
